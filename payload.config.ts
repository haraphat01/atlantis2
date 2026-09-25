import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Uploads go to Supabase Storage (S3-compatible) when configured; otherwise they
// fall back to the local ./media folder, which is fine for local development only.
const useS3 = Boolean(process.env.S3_BUCKET && process.env.S3_ACCESS_KEY_ID);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " | Atlantic Fortis CMS" },
  },
  collections: [Posts, Media, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
    // Keeps Payload's tables out of Supabase's `public` schema (which Supabase's Data API exposes).
    // Create it once in the Supabase SQL editor: `create schema payload;`
    schemaName: "payload",
    migrationDir: path.resolve(dirname, "migrations"),
    // Schema changes go through migrations only (`npm run migrate:create` then `npm run migrate`),
    // since dev and production may share the same Supabase database.
    push: false,
  }),
  sharp,
  plugins: [
    s3Storage({
      enabled: useS3,
      // Keeps the database schema identical whether or not S3 is enabled.
      alwaysInsertFields: true,
      collections: { media: true },
      bucket: process.env.S3_BUCKET || "",
      config: {
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
      },
    }),
  ],
});
