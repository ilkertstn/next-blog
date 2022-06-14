import React from "react";
import Navbar from "@components/Navbar";
import BigStore from "@components/Footer";
import { BlogData } from "@lib/blog";

import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();

  const { slug } = router.query;
  const selectedBlog = BlogData.find((item) => item.slug === slug);

  return (
    <div>
      <Navbar />
      <div className="pt-20 dark:bg-darkGrey">
        <div
          className="blogdetail container  tablet:pl-20 tablet:pr-20  w-full pt-10  dark:bg-darkGrey bg-slate100 pb-10"
          dangerouslySetInnerHTML={{ __html: selectedBlog?.content }}
        />
        <BigStore />
      </div>
    </div>
  );
};

export default BlogDetail;
