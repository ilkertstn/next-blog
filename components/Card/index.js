import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Card = ({ title, time, body, read, image,slug }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-auto p-0 mb-10 tablet:p-10 tablet:mb-0 justify-start items-center w-[100%] tablet:w-[50%]  basis-1/3  group ">
      <div onClick={()=>router.push(`/blog/${slug}`)} className="w-full h-[300px] relative drop-shadow-2xl tablet:hover:scale-105 tablet:ease-in duration-300 cursor-pointer">
        <Image
          className="rounded-xl"
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col w-full items-start ml-2">
        <div className="font-roboto text-grey tiny pt-4">
          {time} ago.
        </div>
        <div onClick={()=>router.push(`/blog/${slug}`)} className="font-roboto h-[20px] font-bold pt-2 w-64 dark:text-white text-soDarkGrey group-hover:underline group-focus:underline cursor-pointer">{title.length > 20 ? `${title.slice(0,30)}...` : title}
</div>
        <div onClick={()=>router.push(`/blog/${slug}`)} className="font-roboto mt-2.5 pt-2 h6 w-[17rem] h-auto tablet:h-[50px] dark:text-white text-soDarkGrey cursor-pointer ">
        {body.length > 200 ? `${body.slice(0, 150)}...` : body}
        </div>
        <div className="pt-4">
          <button onClick={()=>router.push(`/blog/${slug}`)} className="font-roboto font-bold text-red200 h6">{read}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
