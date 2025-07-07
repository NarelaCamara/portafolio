import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Narela  Camara",
  description: "About me",
};

// Configura Fraunces
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

// Configura Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${fraunces.variable} ${montserrat.variable} bg-slate-900 text-white  min-w-[20rem]`}
      >
        {children}
      </body>
    </html>
  );
}
