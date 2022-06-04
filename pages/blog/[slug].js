import React from "react";
import Navbar from "@components/Navbar";
import BigStore from "@components/BigStore";
import { BlogData } from "@lib/blog";

import { useRouter } from 'next/router'


const BlogDetail = () => {
  const firstPost = BlogData[0];

  const router = useRouter();

  const {slug} = router.query;
const selectedBlog = BlogData.find((item) => item.slug === slug);



  return (
    <div className="flex flex-col">
         <div className="bg-grey h-[80px]">
        <Navbar />
        
        <div className="blogdetail container w-full pt-10 tablet:w-[120vh] min-h-[70vh] bg-darkGrey pb-10" dangerouslySetInnerHTML={{__html: selectedBlog?.content}}/>
     
        
        {/* <div className="laptop:pt-[40px]">
          <Title
            title={firstPost.title}
            design="Design"
            minutes={`| ${firstPost.time} ago`}
            images={
              <Image
                className="rounded-full	"
                src={firstPost.image}
                alt="logo"
                width={50}
                height={50}
                objectFit="cover"
              />
            }
            name={`By ${firstPost.author} `}
          />
        </div>
        <div  className="flex flex-col container tablet:w-[750px] pt-10   tablet:pt-18  ">
          <div className="flex w-full tablet:min-h-[auto] tablet:w-[full] tablet:justify-center relative h-[300px]">
            <Image
              className="rounded-2xl"
              src="https://images.pexels.com/photos/11582120/pexels-photo-11582120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-roboto text-grey pt-6 tablet:pt-18 extra-small w-[350px] tablet:w-full">
            {firstPost.description1} <br></br>
            <br></br>
            {firstPost.description2}
          </div>
          <div className="flex flex-row space-x-5 pt-16 justify-center  ">
            <div className="flex w-[340px] tablet:min-h-[250px] tablet:w-[350px] tablet:justify-center relative min-h-[150px]">
              <Image
                className="rounded-2xl"
                src="https://images.pexels.com/photos/11740343/pexels-photo-11740343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex w-[340px] tablet:min-h-[250px] tablet:w-[350px] tablet:justify-center relative min-h-[150px]">
              <Image
                className="rounded-2xl"
                src="https://images.pexels.com/photos/4895728/pexels-photo-4895728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="font-roboto text-grey pt-16 pb-20 extra-small">
            {firstPost.description3}
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="flex flex-col bg-grey tablet:h-[150px] tablet:w-[520px] rounded-xl space-y-2 ">
                <span className="font-roboto flex h4 m-[45px] text-whiteChange ">
                  Prada were so cool about it, even though they understood
                  thecriticism
                </span>
              </div>
              <div className="flex flex-row justify-end pt-4 ">
                <span className="font-roboto font-bold ">Natasha Singh,</span>
                <span className="font-roboto  ">ABD Inc.</span>
              </div>
            </div>
          </div>
          <div className="pt-20 font-roboto text-grey extra-small">
            {firstPost.description4}
            <br></br>
            <br></br>
            {firstPost.description5}
          </div>
          <div className="flex flex-row justify-center font-roboto pt-20 font-medium cursor-pointer">
            <span>Tags:</span>{" "}
            <span className="text-blue">design,</span>
            <span className="text-blue">app,</span>
            <span className="text-blue">tips</span>


          </div>

          <div className="font-roboto flex flex-col  tablet:w-full ">
            <div className="text-center pt-36 font-bold h3">
              Leave a Commments
            </div>
            <div className="text-grey tiny text-center pt-2">
              Nullam tincidunt, purus sit amet viverra auctor, quamque incidunt,
              puincidunt, Vestibulum
            </div>

            
            <div className="flex flex-col pt-44 space-y-10">
              {BlogMiniPostData.map((blogData, index) => (
                <BlogMiniPost
                  image={blogData.image}
                  key={index}
                  content={blogData.content}
                  time={blogData.time}
                  name={blogData.name}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col pt-[200px] text-center font-roboto">
            <div className="font-bold h3">Related Posts</div>
            <div className="text-grey pt-3">
              We would like to share with you knowledge, experiences and latest
              news
            </div>
            <div className="flex flex-col tablet:flex-row tablet:space-x-12 space-y-5 tablet:space-y-0 tablet:justify-center pt-18">
              {PostCardData.map((postCard, index) => (
                <PostCard
                  key={index}
                  time={postCard.time}
                  title={postCard.title}
                  content={postCard.content}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-40 mb-[-170px]">
          <Store />
        </div>
        <BigStore />
      </div> */}
          <BigStore />
      </div>
    </div>
  );
};

export default BlogDetail;
