import React from "react";
import BlogDetail from "@modules/Blog";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogDetail />
      <Footer />
    </div>
  );
};

export default Blog;
