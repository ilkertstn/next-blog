import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion"

const Landing = () => {

    
  return (
    <div className="dark:bg-darkGrey bg-white">
      <Navbar />
      <div className="flex flex-col lg-tablet:flex-row w-full lg-tablet:h-screen h-[700px] justify-between ">
        <div className="flex flex-col font-roboto pl-10 lg-tablet:pl-28  pt-[100px] space-y-6 ">
        <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: "spring", stiffness: 50}}>
          <h2 className="text-red200 font-bold tracking-widest">WELCOME!</h2>
          </motion.div>
          <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 0.4, type: "spring", stiffness: 50}}>
          <h1 className="gradient_text font-bold">I Am Frontend Developer</h1>
          </motion.div>
          <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 0.6, type: "spring", stiffness: 50}}>
          <p>
            I am a Frontend Developer. I create beautiful websites your users<br></br>
            will love. I am a technology enthusiast.
          </p>
          </motion.div>
          
          <div className="flex space-x-8 ">
          <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 0.8, type: "spring", stiffness: 50}}>
            <Link
              passHref
              href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/"
            >
              <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-110 ease-in duration-200 bg-blue text-white w-10">
                <FaLinkedinIn />
              </div>
            </Link>
            </motion.div>
            <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 1, type: "spring", stiffness: 50}}>
            <Link
              passHref
              href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/"
            >
              <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-110 ease-in duration-200 bg-black text-white dark:bg-white dark:text-black w-10">
                <FaGithub />
              </div>
            </Link>
            </motion.div>
            <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 1.2, type: "spring", stiffness: 50}}>
            <Link
              passHref
              href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/"
            >
              <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-110 ease-in duration-200 bg-red200 text-white w-10">
                <AiOutlineMail />
              </div>
            </Link>
            </motion.div>
          </div>
          <Link passHref href="/contact">
          <motion.div initial={{ y: -750 }} animate={{ y: -10 }} transition={{ delay: 1.4, type: "spring", stiffness: 50}} className="flex">
         <button className="contact_button rounded-2xl  pl-4 pr-4 pt-2 pb-2  ">Get Contact</button>
         </motion.div>
         </Link>
        </div>
        <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
        <div className="relative lg-tablet:w-[770px]  lg-tablet:h-[800px]">
            <Image alt="" src="/images/ai.png" layout="fill" objectFit="cover" >

            </Image>
        </div>
        </motion.div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
