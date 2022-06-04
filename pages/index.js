import React from "react";
import Blog from "@modules/Blog";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  console.log(process.env);
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Blog />
    </>
  );
}
