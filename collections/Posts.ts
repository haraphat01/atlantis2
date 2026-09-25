import type { CollectionConfig } from "payload";

const slugify = (value: string) =>
  value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/[\s-]+/g, "-").replace(/^-|-$/g, "");

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedAt", "_status"],
  },
  // Anyone can read published posts; logged-in editors can also see drafts.
  access: {
    read: ({ req: { user } }) => (user ? true : { _status: { equals: "published" } }),
  },
  versions: { drafts: true },
  defaultSort: "-publishedAt",
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { position: "sidebar", description: "URL path, e.g. /blog/your-slug. Generated from the title if left blank." },
      hooks: {
        beforeValidate: [({ value, data }) => slugify(value || data?.title || "")],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 280,
      admin: { description: "Short summary shown on the blog listing and in search results." },
    },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "content", type: "richText", required: true },
    {
      name: "category",
      type: "select",
      defaultValue: "insight",
      options: [
        { label: "Insight", value: "insight" },
        { label: "Advisory", value: "advisory" },
        { label: "Compliance", value: "compliance" },
        { label: "Resilience", value: "resilience" },
        { label: "News", value: "news" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "author", type: "text", defaultValue: "Atlantic Fortis", admin: { position: "sidebar" } },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly" } },
      hooks: {
        beforeChange: [({ value, siblingData }) => value || (siblingData._status === "published" ? new Date().toISOString() : value)],
      },
    },
  ],
};
