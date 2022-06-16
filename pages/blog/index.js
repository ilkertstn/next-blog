import React from "react";
import BlogDetail from "@modules/Blog";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar />
      <BlogDetail />
      <Footer />
    </>
  );
};

export default Blog;
