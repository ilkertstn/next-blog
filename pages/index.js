import React from "react";
import Blog from "@modules/Blog";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  console.log(process.env);
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="1" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        
      </Head>
      <Blog />
    </>
  );
}
