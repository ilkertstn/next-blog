import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import cn from 'classnames';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "How It Works",
    "Features",
    "Blog",
    "About Us",
    "Contact",
  ];

  return (
    <div>
      <nav className={cn(!open ? "bg-grey" : "bg-white","p-8 tablet:p-10 tablet:shadow tablet:flex tablet:items-center tablet:justify-center")}>
        <div className="flex flex-row justify-between items-center ">
          <span className="h5 font-pacifico cursor-pointer ">TASTAN</span>
          <span
            className="pt-2 cursor-pointer tablet:hidden block"
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
          <div className="flex flex-col space-y-3 pl-[20%] pt-8">
            <button className="border rounded-3xl font-medium h-12 w-44">
              Login
            </button>
            <button className="bg-blue rounded-3xl text-white font-medium h-12 w-44">
              Sign Up
            </button>
          </div>
        </ul>
        <ul className="tablet:flex tablet:items-center font-roboto space-x-0 tablet:space-x-10 tablet:pl-14 text-body-small font-medium text-center hidden">
          <li className="mx-0  my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              Features
            </a>
          </li>

          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              Blog
            </a>
          </li>
          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              Contact
            </a>
          </li>
          <li className="mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              About
            </a>
          </li>
          <li className="text-white tablet:text-black mx-4 my-6 tablet:my-0 hover:border-b border-blue">
            <a href="#" className="">
              Login
            </a>
          </li>
          <div className="flex flex-col">
            <button className="tablet:hidden laptop:hidden mx-4 my-6 tablet:my-0">
              <a
                href="#"
                className="bg-white pl-15 tablet:pl-6 pr-15 tablet:pr-6 pt-3 tablet:pt-2 pb-3 tablet:pb-2 rounded-3xl tablet:rounded-2xl text-black font-roboto font-medium border"
              >
                Login
              </a>
            </button>
            <button className="mx-4 my-2 tablet:my-0">
              <a
                href="#"
                className="bg-blue pl-14 tablet:pl-6 pr-14 tablet:pr-6 pt-3 tablet:pt-2 pb-3 tablet:pb-2 rounded-3xl tablet:rounded-2xl text-white font-roboto font-medium   "
              >
                Sign Up
              </a>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
