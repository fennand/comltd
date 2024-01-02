import { Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        {/* Additional head tags if needed */}
      </Head>

      <div className={raleway.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}
