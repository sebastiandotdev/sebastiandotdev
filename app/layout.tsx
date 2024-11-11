import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const onestSans = localFont({
  src: "./fonts/Onest-Normal.woff2",
  variable: "--font-onest-sans",
  weight: "400",
});

const onestMono = localFont({
  src: "./fonts/Onest-Bold.woff2",
  variable: "--font-onest-mono",
  weight: "800",
});

export const metadata: Metadata = {
  title: "Sebastian Garcia",
  description: "Website oficial of Sebastian Garcia",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${onestSans.variable} ${onestMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
