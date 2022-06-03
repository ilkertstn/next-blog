import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Skills",
    "Contact",
  ];
  const router = useRouter();
  return (
    <div>
      <nav
        className={cn(
          !open ? "bg-grey" : "bg-white",
          "p-[30px] tablet:p-10 tablet:shadow tablet:flex justify-between "
        )}
      >
        <div className="flex flex-row justify-between ">
          <span
            onClick={() => router.push("/")}
            className="h5 font-roboto font-medium cursor-pointer text-blackChange "
          >
            <div className="flex">
              <Image className="rounded-full" alt="img" src="/images/ilker.jpg" height={60} width={60}></Image>
              <div className="p-3">
              Ilker Tastan
              </div>
            </div>
          </span>
          <span
            className="p-4 cursor-pointer tablet:hidden block"
            onClick={() => setOpen(!open)}
          >
            <Image src="/images/bar.png" width={20} height={20} alt="" />
          </span>
        </div>
        <ul
          className={`tablet:hidden flex flex-col absolute font-roboto text-center pl-12 font-medium w-[100%] h-[60vh] bg-white top-[90px] z-10 ${
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
        <ul className="tablet:flex tablet:items-center font-roboto space-x-0 tablet:space-x-10 tablet:pl-14  font-medium  hidden cursor-pointer uppercase text-blackChange">
          <li className="mx-0  my-6 tablet:my-0 hover:border-b border-blue">
            <a onClick={() => router.push("/")} className="">
              Home
            </a>
          </li>
          <Link passHref href="/about">
          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
              About
          </li>
          </Link>
          <Link passHref href="/skills">
          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            
              Skills
          
          </li>
          </Link>
          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              Contact
            </a>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
