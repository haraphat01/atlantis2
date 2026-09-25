# Blog Admin Guide

The blog at `/blog` is powered by [Payload CMS](https://payloadcms.com), which runs inside this Next.js app. Posts are written in the admin panel at `/admin`, stored in a Supabase Postgres database, and cover images are stored in Supabase Storage.

## How it fits together

| Piece | Where it lives |
| --- | --- |
| Admin panel | `/admin`, served by this app |
| Blog pages | `app/(frontend)/blog/` → `/blog` and `/blog/<slug>` |
| CMS config | `payload.config.ts`, `collections/` (`Posts`, `Media`, `Users`) |
| Database | Supabase Postgres, in the `payload` schema |
| Uploaded images | Supabase Storage bucket (e.g. `media`) via its S3-compatible API |
| Schema history | `migrations/` (commit these) |

The rest of the site lives in `app/(frontend)/`; Payload's admin and API routes live in `app/(payload)/`. Blog pages render on every request, so published changes appear immediately.

---

## 1. One-time setup

### Supabase database

1. Create a Supabase project (or use an existing one).
2. In the **SQL editor**, run:

   ```sql
   create schema if not exists payload;
   ```

   Payload keeps its tables in this schema instead of `public`, so they are not exposed through Supabase's Data API.

3. From **Connect**, copy two connection strings:
   - **Transaction pooler** (port `6543`): used by the app → `DATABASE_URL`
   - **Direct** or **Session pooler** (port `5432`): used for migrations → `DIRECT_URL`

### Supabase Storage (images)

1. Go to **Storage** → create a bucket named `media` and mark it **public**.
2. Go to **Storage → Settings → S3 Connection**: note the endpoint and region, then create an **access key**.

### Environment variables

Copy `.env.example` to `.env` and fill it in:

```env
DATABASE_URL=postgresql://postgres.<ref>:<password>@aws-X-<region>.pooler.supabase.com:6543/postgres
DIRECT_URL=postgresql://postgres.<ref>:<password>@aws-X-<region>.pooler.supabase.com:5432/postgres
PAYLOAD_SECRET=<output of: openssl rand -hex 32>

S3_BUCKET=media
S3_ENDPOINT=https://<ref>.storage.supabase.co/storage/v1/s3
S3_REGION=<region>
S3_ACCESS_KEY_ID=<access key id>
S3_SECRET_ACCESS_KEY=<secret access key>
```

- `.env` is gitignored. Never commit it or share it.
- `PAYLOAD_SECRET` signs admin logins. Keep it stable; changing it logs everyone out.
- If the `S3_*` values are empty, uploads are saved to a local `media/` folder. This is fine for quick local tests, but those files are lost on Vercel.

### Install and create the tables

```bash
npm install
```

Apply the migrations over the direct connection:

```bash
export $(grep '^DIRECT_URL=' .env | tr -d '"')
DATABASE_URL="$DIRECT_URL" npm run migrate
```

---

## 2. Running locally

```bash
npm run dev
```

- Site: http://localhost:3000
- Blog: http://localhost:3000/blog
- Admin: http://localhost:3000/admin

The first time you open `/admin`, you'll be asked to create a user. **The first user created becomes the admin.** Add more editors later under **Users**.

> Local development and production share the same Supabase database, so posts you create locally are live content. Delete test posts when you're done.

---

## 3. Writing posts

In `/admin` → **Posts** → **Create New**:

| Field | Notes |
| --- | --- |
| Title | Required. |
| Slug | The URL (`/blog/<slug>`). Generated from the title if left blank. Must be unique. |
| Excerpt | Required, max 280 characters. Shown on the listing, and used as the SEO description. |
| Cover image | Optional. Upload a new image or pick one from Media. Alt text is required. |
| Content | The article body (headings, lists, links, quotes, images). |
| Category | Insight, Advisory, Compliance, Resilience or News. |
| Author | Defaults to "Atlantic Fortis". |
| Published at | Set automatically the first time you publish. You can change it to backdate a post. |

**Drafts vs. published**

- **Save Draft**: visible only to logged-in editors, never on the public site.
- **Publish**: appears on `/blog` immediately.
- **Unpublish**: removes it from the site, and the post URL returns 404.
- Every save is kept as a version; use the **Versions** tab to view or restore older ones.

---

## 4. Deploying (Vercel)

In the Vercel project → **Settings → Environment Variables**, add:

- `DATABASE_URL` (the **transaction pooler** string, port `6543`)
- `PAYLOAD_SECRET`
- `S3_BUCKET`, `S3_ENDPOINT`, `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`

Then deploy as usual. The build doesn't need the database, but make sure migrations have been applied (section 5) **before** deploying code that changes the schema.

---

## 5. Changing the blog's fields (migrations)

Automatic schema syncing is turned off (`push: false` in `payload.config.ts`), because local and production share one database. Any change to a collection in `collections/` needs a migration:

1. Edit the collection (e.g. add a field to `collections/Posts.ts`).
2. Regenerate TypeScript types:

   ```bash
   npm run generate:types
   ```

3. Create and apply a migration:

   ```bash
   export $(grep '^DIRECT_URL=' .env | tr -d '"')
   DATABASE_URL="$DIRECT_URL" npm run migrate:create <short-name>
   DATABASE_URL="$DIRECT_URL" npm run migrate
   ```

4. Commit the collection change **and** the new files in `migrations/` together.

If you add a plugin or a custom admin component, also run:

```bash
npm run generate:importmap
```

---

## 6. Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the site + admin locally |
| `npm run build` / `npm run start` | Production build and serve |
| `npm run generate:types` | Regenerate `payload-types.ts` from the collections |
| `npm run generate:importmap` | Regenerate the admin import map |
| `npm run migrate:create <name>` | Create a migration from collection changes |
| `npm run migrate` | Apply pending migrations |
| `npm run payload migrate:status` | Show which migrations have run |

---

## 7. Troubleshooting

| Problem | Likely cause / fix |
| --- | --- |
| `relation "payload.posts" does not exist` | Migrations haven't been run against this database → section 1, "Install and create the tables". |
| `schema "payload" does not exist` | Run `create schema if not exists payload;` in the Supabase SQL editor. |
| Can't log in / logged out everywhere | `PAYLOAD_SECRET` is missing or was changed. |
| Images upload but don't display in production | `S3_*` variables are missing in Vercel, or the bucket isn't public. |
| Migrations hang or fail through the pooler | Use `DIRECT_URL` (port `5432`) for migration commands, as shown above. |
| Supabase project is unreachable | Free-tier projects pause after about a week of inactivity; resume it in the Supabase dashboard. |
| `/admin` is a blank dark screen in dev | You opened the dev server via an address other than `localhost` (e.g. `127.0.0.1` or the "Network" IP). Add that host to `allowedDevOrigins` in `next.config.ts` and restart `npm run dev`. |
| `localhost` shows "HTTP ERROR 431" | Too many cookies for `localhost` from other projects. Clear them: Chrome → Settings → Privacy → Third-party cookies → See all site data → search `localhost` → delete. |
| Type errors after editing collections | Run `npm run generate:types`. |
| Weird build errors after moving files | Delete the `.next` folder and rebuild. |
