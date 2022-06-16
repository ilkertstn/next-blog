import React from "react";
import Head from "next/head";
import AnaSayfa from "./landing";

export default function Home() {
  console.log(process.env);
  return (
    <>
      <Head>
        <title>İlker Taştan - Frontend Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AnaSayfa/>
    </>
  );
}
