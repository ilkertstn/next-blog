import React from "react";

const Title = ({ title, description, design, minutes, images, name }) => {
  return (
    <div className=" flex flex-col text-center  ">
      <div className="flex flex-row justify-center">
        <button className="font-roboto text-blue font-bold">{design}</button>
        <span className="font-roboto"> {minutes}</span>
      </div>
      <span className="font-roboto w-[100%] tablet:w-[45%] ml-[0px] tablet:ml-[27%] pl-[20px] tablet:pl-0 pr-[20px] tablet:pr-0 text-whiteChange font-medium">
        {description}
      </span>
      <div className="w-[100%] tablet:w-[50%]  tablet:ml-[25%] ">
      <h1 className="font-roboto text-[57px] tablet:h1  font-black text-blackChange ">{title}</h1>
      </div>
      <div className="flex flex-row justify-center pt-7">
        <div>{images}</div>
        <div className=" pt-3 pl-2 font-roboto font-bold">{name}</div>
      </div>
    </div>
  );
};

export default Title;
