import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const BigStore = () => {
  const [data, setData] = useState({
    email: "",
  });

  const { email } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="bg-blackChange max-w-screen-md tablet:h-[900px]">
      <div className="flex flex-col text-center pt-10 tablet:pt-20">
        <div className="text-white font-roboto font-bold h2 w-full tablet:w-full tablet:pl-0  ">
          <Image
            className="rounded-full"
            alt="img"
            src="/images/ilker.jpg"
            height={50}
            width={50}
          />
          Ilker Tastan
        </div>
        <div className="justifty-center font-roboto text-whiteChange pt-5 ">
          I create user-friendly websites that your users will love. I&lsquo;m
          with you from start<br></br> to finish to make sure you achieve your goals and
          that your users are happy.
        </div>
        <div>
        <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <Link passHref href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/">
          <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
              <FaLinkedinIn />
          </div>
          </Link>
          <Link passHref href="https://github.com/ilkertstn">
          <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <FaGithub />
          </div>
          </Link>
          <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
          <AiOutlineMail />
          </div>
        </div>

        <div className="flex justify-center pt-5 tablet:pt-20 ">
          <hr className="hidden mobile:block text-whiteChange w-[1000px] "></hr>
        </div>
        <div className="flex flex-col tablet:flex-row pt-0 tablet:pt-44 justify-center tablet:space-x-36 " >
          <div className="flex flex-col space-y-7 tablet:space-y-3 ">
            <button className="hidden mobile:block font-roboto font-bold h5 text-white tablet:self-baseline	">
              Quick Links
            </button>
            <div className="flex flex-col pt-2 tablet:pt-5 space-y-0 tablet:space-y-2">
            <Link href="/blog" passHref>
              <button className="font-roboto text-whiteChange tablet:self-baseline	">
                Home
              </button>
              </Link>

              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline">
                About
              </button>
              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline	">
                Skills
              </button>
              <Link href="/blog" passHref>
                <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline	">
                  Contact
                </button>
              </Link>
              
            </div>
          </div>
          <div className="flex flex-col space-y-0 tablet:space-y-3 ">
            <button className="hidden mobile:block font-roboto font-bold h5 text-white tablet:self-baseline">
              Contact
            </button>
            <div className="flex flex-col pt-2 tablet:pt-5  space-y-0 tablet:space-y-2">
              <button className="font-roboto text-whiteChange tablet:self-baseline pt-2 tablet:pt-0 ">
               LinkedIn
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline	pt-[18px] tablet:pt-2">
                GitHub
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline	pt-[18px] tablet:pt-2">
                Mail
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BigStore;
