import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const BigCard = ({ title, body, user, time, read, image }) => {
  return (
    <div className="flex flex-col lg-laptop:flex-row justify-center pt-8 tablet:pt-0 min-h-[300px] group ">
      <div className="flex w-full lg-laptop:min-h-full lg-laptop:w-[500px] lg-laptop:justify-center relative min-h-[300px] lg-laptop:group-hover:scale-105 ease-in duration-300 drop-shadow-2xl cursor-pointer">
        <Image
          className="rounded-xl"
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col w-[80%] tablet:w-[27rem] ml-6 tablet:ml-16 mt-6 group">
        <div className="font-roboto h2 font-bold w-[70%] tablet:w-[100%] dark:text-white text-soDarkGrey group-hover:underline cursor-pointer ">
          {title}
        </div>
        <div className="font-roboto dark:text-white text-soDarkGrey mt-2.5 w-[95%] text-small cursor-pointer ">
          {body.length > 200 ? `${body.slice(0, 250)}...` : body}
        </div>
        <div className="flex pt-4  ">
          <button className="font-roboto font-bold text-red200 ">{read}</button>
          <div className=" ml-5 group-hover:pl-8 duration-300 ">
            <BsArrowRight size={20} />
          </div>
        </div>
        <div className="flex flex-row pt-3">
          <div className="flex flex-col ml-0">
            <div className="font-roboto font-bold dark:text-white text-soDarkGrey">
              {user}
            </div>
            <div className="font-roboto text-grey tiny pt-2">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
