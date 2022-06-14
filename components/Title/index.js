import React from "react";
import { motion } from "framer-motion"
const Title = ({ title}) => {
  return (
    <div className=" flex flex-col text-center  ">
      <div className="w-[100%] tablet:w-[50%]  tablet:ml-[25%] ">
      <motion.div  initial={{y:-250}}
                animate={{y:-10}} >
      <h1 className="font-roboto text-[57px] tablet:h1  font-black dark:text-white text-soDarkGrey">{title}</h1>
      </motion.div>
      </div>
      
    </div>
  );
};

export default Title;
