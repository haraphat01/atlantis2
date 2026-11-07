import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./site-header";
import { socialImage } from "./social-image";
export const metadata: Metadata = {
  metadataBase: new URL("https://atlanticfortis.com"),
  title: "Atlantic Fortis | Cybersecurity Advisory",
  description: "Independent cybersecurity advisory for organizations across Canada and Sub-Saharan Africa.",
  openGraph: {
    title: "Atlantic Fortis | Cybersecurity Advisory",
    description: "Independent cybersecurity advisory for organizations across Canada and Sub-Saharan Africa.",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlantic Fortis | Cybersecurity Advisory",
    description: "Independent cybersecurity advisory for organizations across Canada and Sub-Saharan Africa.",
    images: [socialImage],
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body suppressHydrationWarning><SiteHeader />{children}</body></html>;
}