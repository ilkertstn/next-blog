import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaRegLightbulb,FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Contact"];
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <nav
        className={cn(
          !open ? "bg-white" : "bg-white ",
          "p-[30px] tablet:p-10 tablet:shadow tablet:flex justify-between dark:bg-darkGrey "
        )}
      >
        <div className="flex flex-row justify-between ">
          <span
            onClick={() => router.push("/")}
            className="h5 font-roboto font-medium cursor-pointer text-white "
          >
            <div className="flex">
              <div className="relative w-[80px] h-[80px] z-20">
                <Image
                  className="rounded-full"
                  alt="img"
                  src="/images/ilker.jpg"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div
                className={cn(
                  open ? "text-darkGrey" : "text-soDarkGrey",
                  "p-7 dark:text-white"
                )}
              >
                Ilker Tastan
              </div>
            </div>
          </span>
          <div className="flex flex-col">
            <button
              className="text-soDarkGrey dark:text-white pl-4 tablet:hidden block "
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <FaRegLightbulb />
            </button>
            <span
              className="pt-5 pl-4 text-soDarkGrey dark:text-white cursor-pointer tablet:hidden block"
              onClick={() => setOpen(!open)}
            >
              <FaBars />
            </span>
          </div>
        </div>
        <ul
          className={`tablet:hidden flex flex-col absolute font-roboto text-center pl-12 font-medium w-[100%] h-[65vh] dark:bg-darkGrey bg-white top-[90px] pt-16 space-y-12  z-10 ${
            open ? "left-0" : "top-[-100%]"
          }`}
        >
          {links.map((el, index) => {
            return (
              <li
                key={index}
                className="hover:cursor-pointer hover:bg-white hover:text-black w-[90%] mt-4 "
              >
                {el}
              </li>
            );
          })}
        </ul>
        <ul className="tablet:flex tablet:items-center font-roboto space-x-0 tablet:space-x-10 tablet:pl-14  font-medium  hidden cursor-pointer  text-white">
          <li className="mx-0  my-6 tablet:my-0 hover:bg-soDarkGrey px-6 py-3 rounded">
            <a
              onClick={() => router.push("/")}
              className="dark:text-white text-soDarkGrey dark:hover:text-white hover:text-white"
            >
              Home
            </a>
          </li>
          <Link passHref href="/about">
            <li className="mx-4 my-6 tablet:my-0 hover:bg-soDarkGrey dark:hover:text-white hover:text-white px-6 py-3 rounded dark:text-white text-soDarkGrey">
              About
            </li>
          </Link>
          <Link passHref href="/skills">
            <li className="mx-4 my-6 tablet:my-0 hover:bg-soDarkGrey dark:hover:text-white hover:text-white px-6 py-3 rounded text-soDarkGrey dark:text-white">
              Skills
            </li>
          </Link>
          <Link passHref href="/contact">
            <li className="mx-4 my-6 tablet:my-0 hover:bg-soDarkGrey hover:text-white dark:hover:text-white px-6 py-3 rounded text-soDarkGrey dark:text-white">
              <a href="#" className="">
                Contact
              </a>
            </li>
          </Link>
          <button
            className="text-soDarkGrey dark:text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <FaRegLightbulb />
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
