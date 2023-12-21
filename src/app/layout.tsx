import { Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={raleway.className}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
