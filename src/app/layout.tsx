import Header from "@/components/header and footer/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope, EB_Garamond } from "next/font/google";
import Footer from "@/components/header and footer/Footer";

const manrope = Manrope({ subsets: ["latin"] });
const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--heading-font",
});

export const metadata: Metadata = {
  title: "PayBuddy | Welcome",
  description: "Build by DevNate,  Designed by ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${garamond.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
