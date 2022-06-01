import React from "react";
import Image from "next/image";


const Card = ({ title, time, body, read, image }) => {
  return (
    <div className="flex flex-col h-auto p-0 mb-10 tablet:p-10 tablet:mb-0 justify-start items-center w-[100%] tablet:w-[19%]  basis-1/3">
      <div className="w-full h-[300px] relative drop-shadow-2xl hover:scale-105 easin duration-300 ">
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
        <div className="font-roboto h-[20px] font-bold pt-2 w-64">{title}</div>
        <div className="font-roboto text-fontGrey mt-2.5 pt-2 h6 w-[17rem] h-auto tablet:h-[50px] ">
        {body.length > 200 ? `${body.slice(0, 150)}...` : body}
        </div>
        <div className="pt-4">
          <button className="font-roboto font-bold text-blue h6">{read}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
