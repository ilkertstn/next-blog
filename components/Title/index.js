import React from "react";

const Title = ({ title, description, design, minutes, images, name }) => {
  return (
    <div className=" flex flex-col text-center  ">
      <div className="w-[100%] tablet:w-[50%]  tablet:ml-[25%] ">
      <h1 className="font-roboto text-[57px] tablet:h1  font-black dark:text-white text-soDarkGrey">{title}</h1>
      </div>
      
    </div>
  );
};

export default Title;
