import React from "react";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import BigCard from "@components/BigCard";
import Card from "@components/Card";
import { BlogData } from "@lib/blog";
import Link from "next/link";
import Footer from "@components/Footer";
const Blog = () => {
  
  const secondPost = BlogData[0];
  console.log(BlogData);
  return (
    <div className="dark:bg-darkGrey bg-slate100">
      <div className="dark:bg-darkGrey bg-slate100 h-[460px]">
        <Navbar />
        <div className="pt-20">
          <Title title="Blog" />

        </div>
      </div>
      <div className="container">
     
          <div className="tablet:pt-20">
            
          <div className="flex justify-start pt-40 tablet:pt-12 mt-[-120px] pl-0 tablet:pl-10 pb-16  rounded-3xl   ">
            
            <BigCard
              title={secondPost.title}
              time={` ${secondPost.time} ago`}
              user={`By ${secondPost.author}`}
              body={secondPost.description}
              read="Read More"
              image={secondPost.image}
            />
          </div>
          </div>
  

        <div className="flex flex-col tablet:flex-row w-full flex-wrap justify-center align-center drop-shadow-2xl rounded-3xl ">
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


      <div className="pt-10">

        <Footer />
      </div>
    </div>
  );
};

export default Blog;
