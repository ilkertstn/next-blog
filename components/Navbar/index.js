import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaLinkedin, FaGithub, FaUserAstronaut } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import {MdNightlight, MdLightMode} from "react-icons/md"
import {GiSkills} from "react-icons/gi"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <div className="shadow-2xl  ">
      <nav className="bg-slate100 p-[30px] tablet:p-10  tablet:flex justify-between dark:bg-darkGrey ">
        <div className="flex flex-row justify-between ">
          <span
            onClick={() => router.push("/")}
            className="h5 font-roboto font-medium cursor-pointer text-white "
          >
            <div className="flex">
              <div className="relative w-[80px] h-[80px] ">
                <Image
                  className="rounded-full"
                  alt="img"
                  src="/images/ilker.jpg"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="text-soDarkGrey p-7 dark:text-white w-[200px]">
                Ilker Tastan
              </div>
            </div>
          </span>

          <span className="pt-8 text-soDarkGrey dark:text-white cursor-pointer tablet:hidden block">
            <AiOutlineMenu onClick={handleNav} size={20} />
          </span>
        </div>
        <ul className="tablet:flex tablet:items-center font-roboto space-x-0 tablet:space-x-10 tablet:pl-14  font-medium  hidden cursor-pointer  text-white">
          <li className="mx-0  my-6 tablet:my-0  px-6 py-3 rounded">
            <a
              onClick={() => router.push("/")}
              className="dark:hover:bg-soDarkGrey hover:bg-whiteChange  dark:hover:text-white px-6 py-3 hover:text-blackChange  rounded-xl dark:text-white text-soDarkGrey"
            >
              Home
            </a>
          </li>
          <Link passHref href="/about">
            <li className="mx-4 my-6 tablet:my-0 dark:hover:bg-soDarkGrey hover:bg-whiteChange dark:hover:text-white hover:text-blackChange px-6 py-3 rounded-xl dark:text-white text-soDarkGrey">
              About
            </li>
          </Link>
          <Link passHref href="/skills">
            <li className="mx-4 my-6 tablet:my-0 dark:hover:bg-soDarkGrey hover:bg-whiteChange dark:hover:text-white hover:text-blackChange px-6 py-3 rounded-xl text-soDarkGrey dark:text-white">
              Skills
            </li>
          </Link>
          <Link passHref href="/contact">
            <li className="mx-4 my-6 tablet:my-0 dark:hover:bg-soDarkGrey hover:bg-whiteChange hover:text-blackChange dark:hover:text-white px-6 py-3 rounded-xl text-soDarkGrey dark:text-white">
              <a href="#" className="">
                Contact
              </a>
            </li>
          </Link>
          <button
            className="text-white bg-purple dark:bg-yellow300 rounded-full p-3 hover:scale-110 ease-in duration-200"
            onClick={() => setTheme(theme === "light" ? "dark" : "light" )}
          >
            {(theme==="dark" ? <MdLightMode/> : <MdNightlight/>)} 
           
          </button>
        </ul>
      </nav>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-20"
            : " "
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] screens:w-[60%] tablet:w-[45%] h-screen bg-slate100 dark:bg-darkGrey p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                className="rounded-full" 
                alt="img"
                src="/images/ilker.jpg"
                height={70}
                width={70}
              />
              <div className="flex items-center space-x-3">
                <button  onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="text-white bg-purple dark:bg-yellow300 p-3 rounded-full shadow-lg shadow-purple dark:shadow-yellow cursor-pointer">
                {(theme==="dark" ? <MdLightMode/> : <MdNightlight/>)} 
                </button>
                <div className="rounded-full shadow-lg shadow-grey dark:shadow-black cursor-pointer p-3 dark:text-white">
                  <AiOutlineClose onClick={handleNav} size={20} />
                </div>
              </div>
            </div>
            <div className="border-b border-grey my-4">
              <p className="font-roboto w-[85%] tablet:w-[90%] py-4">
                Let&rsquo;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="font-medium">
              <div className="flex items-center space-x-4">
              <AiOutlineHome size={30}/>
              <Link passHref href="/">
                <li className="py-4 text-small cursor-pointer w-15 hover:underline">Home</li>
              </Link>
              </div>
              <div className="flex items-center space-x-4 ">
                <FaUserAstronaut size={30} />
              <Link passHref href="/about">
                <li className="py-4 text-small cursor-pointer w-15 hover:underline">About</li>
              </Link>
              </div>
              <div className="flex items-center space-x-4">
                <GiSkills size={30}/>
              <Link passHref href="/skills  ">
                <li className="py-4 text-small cursor-pointer w-15 hover:underline">Skills</li>
              </Link>
              </div>
              <div className="flex items-center space-x-4">
                <AiOutlineContacts size={30}/>
              <Link passHref href="/contact">
                <li className="py-4 text-small cursor-pointer w-15 hover:underline">Contact</li>
              </Link>
              </div>
            </ul>
            <div className="pt-20 ">
              <p className="uppercase tracking-wide text-red200 font-medium">
                Let&rsquo;s Connect
              </p>
              <div className="flex items-center justify-between my-4 screens:w-[70%]">
                <div className="rounded-full shadow-lg bg-blue p-3 cursor-pointer hover:scale-105 ease-in duration-200 text-white">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-200 bg-black dark:bg-white text-white  dark:text-black ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg  bg-red300 p-3 cursor-pointer hover:scale-105 ease-in duration-200 text-white">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
