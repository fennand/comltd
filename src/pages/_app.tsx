// pages/_app.tsx

import "../app/globals.css"; // Adjust the path as necessary
import type { AppProps } from "next/app";
import RootLayout from "../app/layout";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
