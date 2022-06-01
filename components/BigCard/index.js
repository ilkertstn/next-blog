import React from "react";
import Image from "next/image";

const BigCard = ({title, body, user, time, read, image}) => {
  return (
    <div className="flex flex-col tablet:flex-row justify-center pt-8 tablet:pt-0 min-h-[300px]   ">
      <div className="flex w-full tablet:min-h-[auto] tablet:w-[500px] tablet:justify-center relative min-h-[300px] hover:scale-105 ease-in duration-300 drop-shadow-2xl">
        <Image
          className="rounded-xl"
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col w-[80%] tablet:w-[27rem] ml-6 tablet:ml-16 mt-6">
        <div className="font-roboto h2 font-bold w-[70%] tablet:w-[100%] text-blackChange ">
          {title}
        </div>
        <div className="font-roboto text-fontGrey mt-2.5 w-[95%] text-small">
          {body.length > 200 ? `${body.slice(0, 250)}...` : body}
        </div>
        <div className="pt-4">
          <button className="font-roboto font-bold text-blue">{read}</button>
        </div>
        <div className="flex flex-row pt-3">
          <div className="flex flex-col ml-0">
            <div className="font-roboto font-bold">{user}</div>
            <div className="font-roboto text-grey tiny pt-2">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
