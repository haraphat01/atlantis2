import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Atlantic Fortis | Cybersecurity Advisory",
  description: "Independent cybersecurity advisory for organizations across Canada and Sub-Saharan Africa.",
  openGraph: {
    title: "Atlantic Fortis | Cybersecurity Advisory",
    description: "Independent cybersecurity advisory for organizations across Canada and Sub-Saharan Africa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlantic Fortis | Cybersecurity Advisory",
    description: "Independent cybersecurity advisory for organizations across Canada and Sub-Saharan Africa.",
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}