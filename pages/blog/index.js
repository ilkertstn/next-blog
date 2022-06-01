import React from "react";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Input from "@components/Input";
import BigCard from "@components/BigCard";
import Card from "@components/Card";
import Store from "@components/Store";
import BigStore from "@components/BigStore";
import Image from "next/image";
import {BlogData} from "@lib/blog";
import Link from 'next/link';

const Blog = () => {
  const secondPost = BlogData[2];

  return (
    <div>
      <div className="bg-grey   h-[460px]">
        <Navbar />
        <div className="pt-[45px] ">
          <Title title="Blog" description="Checkout our Latest Stories" />
          <div className="pb-16 mobile:block">
            <Input />
          </div>
        </div>
      </div>
      <div className="container">
      <Link passHref  href={`/blog/${secondPost.slug}`}>

        <div className="flex justify-start pt-40 tablet:pt-12 mt-[-120px] pl-0 tablet:pl-10 pb-16">
          <BigCard
            title={secondPost.title}
            time={` ${secondPost.time} ago`}
            user={`By ${secondPost.author}`}
            body={secondPost.description}
            read="Read Story"
            image={secondPost.image}
          />
        </div>
        </Link>

        <div className="flex flex-col tablet:flex-row w-full flex-wrap justify-center align-center   ">
       {BlogData.slice(2).map((blog,index)=>(
            <Card
              key={index}
              image={blog.image}
              title={blog.title}
              time={blog.time}
              read="Read Story"
              body={blog.description}
            />
          ))}
        </div>
      </div>

       <div className="pt-18 text-center ">
        <button className="font-roboto font-bold border-0 text-blackChange bg-grey rounded-xl w-[210px] h-15 pt-1 ">
          Previous Posts
        </button>
      </div>
      <div>
        <div className="mb-[-170px] pt-[24rem]">
        <Store />
        </div>
      <BigStore /> 
      </div>
    </div>
  );
};

export default Blog;
