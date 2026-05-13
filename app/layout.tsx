import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
  title: {
    default: "Carpet Direct NZ — Auckland's Flooring Specialists",
    template: "%s · Carpet Direct NZ",
  },
  description:
    "Carpet, SPC, vinyl, and tiles supplied and installed across Auckland. Free measure & quote. Family-run since 2005.",
  metadataBase: new URL("https://carpetdirect.nz"),
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "Carpet Direct NZ",
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
      <body className="flex min-h-dvh flex-col bg-off-white text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
