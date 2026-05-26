import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale } from "@/i18n/config";

const dictionary = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
