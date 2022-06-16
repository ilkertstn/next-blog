import React from "react";
import About from "@components/About";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from "next/head";

const Aboutt = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default Aboutt;
