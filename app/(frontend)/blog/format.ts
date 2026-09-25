export const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
