import React from "react";
import Title from "@components/Title";
import BigCard from "@components/BigCard";
import Card from "@components/Card";
import { BlogData } from "@lib/blog";
import { useRouter } from "next/router";
import { motion } from "framer-motion"
const Blog = () => {
  const secondPost = BlogData[0];
  console.log(BlogData);
  const router = useRouter();
  return (
    <div className="dark:bg-darkGrey bg-slate100">
      <div className="dark:bg-darkGrey bg-slate100 h-[300px] lg-tablet:h-[460px]">
       
        <div className="pt-14 lg-tablet:pt-30">
          <Title title="Blog" />
        </div>
      </div>
      <div className="container">
        <div>
        <motion.div initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}>
          <div
            onClick={() => router.push(`/blog/${secondPost.slug}`)}
            className="flex lg-tablet:justify-start justify-center mt-[-120px] pl-0 tablet:pl-10 pb-16  rounded-3xl   "
          >
            <BigCard
              title={secondPost.title}
              time={`Posted ${secondPost.time}`}
              user={`By ${secondPost.author}`}
              body={secondPost.description}
              read="Read More"
              image={secondPost.image}
            />
          </div>
          </motion.div>
        </div>

        <div className="flex flex-col tablet:flex-row w-full flex-wrap justify-center align-center drop-shadow-2xl rounded-3xl pb-20 ">
          {BlogData.slice(1).map((blog, index) => (
            <Card
              key={index}
              image={blog.image}
              title={blog.title}
              time={blog.time}
              read="Read More"
              body={blog.description}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Blog;
