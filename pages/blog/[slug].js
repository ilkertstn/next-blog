import React from "react";
import Navbar from "@components/Navbar";
import BigStore from "@components/Footer";
import { BlogData } from "@lib/blog";

import { useRouter } from "next/router";

const BlogDetail = () => {
  const firstPost = BlogData[0];

  const router = useRouter();

  const { slug } = router.query;
  const selectedBlog = BlogData.find((item) => item.slug === slug);

  return (
    <div className="flex flex-col">
      <div className="bg-grey h-[80px]">
        <Navbar />

        <div
          className="blogdetail container w-full pt-10 tablet:w-[120vh] min-h-[70vh] bg-darkGrey pb-10"
          dangerouslySetInnerHTML={{ __html: selectedBlog?.content }}
        />

        <BigStore />
      </div>
    </div>
  );
};

export default BlogDetail;
