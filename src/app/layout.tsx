import type { Metadata } from "next";
import { Roboto_Condensed, Jersey_15 } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400',
});

const geistMono = Jersey_15({
weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Tech Book Club",
  description: "Welcome to the Tech Book Club!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${roboto.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
