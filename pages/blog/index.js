import React from "react";
import {BlogData} from "@lib/blog";
import BlogDetail from "@modules/Blog";

const Blog = () => {
  const secondPost = BlogData[0];

  return (
    <BlogDetail/>
  )
};

export default Blog;
