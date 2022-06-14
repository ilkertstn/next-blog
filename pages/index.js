import React from "react";
import Blog from "@modules/Blog";
import Head from "next/head";
import Landing from "@components/Landing";

export default function Home() {
  console.log(process.env);
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Landing />
    </>
  );
}
