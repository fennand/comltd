import "../app/globals.css"; // Adjust the path as necessary
import type { AppProps } from "next/app";
import RootLayout from "../app/layout";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ErrorBoundary>
  );
}

export default MyApp;
