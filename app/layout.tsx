import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "wdth"],
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: {
    default: "Carpet Direct NZ — Flooring made simple. Installed properly. Priced directly.",
    template: "%s | Carpet Direct NZ",
  },
  description:
    "Auckland-wide carpet, vinyl, SPC plank and carpet tile supply and installation. Direct pricing, free in-home measure, proudly walked on since 2005.",
  metadataBase: new URL("https://carpetdirect.nz"),
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "Carpet Direct NZ",
    title: "Carpet Direct NZ — Auckland flooring, direct from the warehouse",
    description:
      "Carpet, vinyl, SPC planks and tiles. Supplied direct, expertly installed. Free in-home measure across Auckland.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={robotoFlex.variable}>
      <body
        className="min-h-dvh bg-bg text-fg flex flex-col"
        style={{ fontFamily: "var(--font-roboto-flex), ui-sans-serif, system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
