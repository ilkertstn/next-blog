import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

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
    <div className="bg-soDarkGrey max-w-screen-md tablet:h-[900px]">
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
        <div className="justifty-center font-roboto text-whiteChange p-[2rem] ">
          I create user-friendly websites that your users will love. I&lsquo;m
          with you from start<br></br> to finish to make sure you achieve your goals and
          that your users are happy.
        </div>
        <div>
        <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <Link passHref href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/">
          <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-200 text-white">
              <FaLinkedinIn />
          </div>
          </Link>
          <Link passHref href="https://github.com/ilkertstn">
          <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-200 text-white">
          <FaGithub />
          </div>
          </Link>
          <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-200 text-white">
          <AiOutlineMail />
          </div>
        </div>

        <div className="flex justify-center tablet:pt-20 ">
          <hr className="hidden mobile:block text-whiteChange w-[1200px] "></hr>
        </div>
        <div className="flex flex-col tablet:flex-row pt-0 tablet:pt-20 justify-center tablet:space-x-36 " >
          <div className="flex flex-col space-y-7 tablet:space-y-3 ">
            <span className="hidden mobile:block font-roboto font-bold h5 text-white tablet:self-baseline	">
              Quick Links
            </span>
            <div className="flex flex-col pt-2 tablet:pt-5 space-y-0 tablet:space-y-2">
            <Link href="/blog" passHref>
              <button className="font-roboto text text-whiteChange tablet:self-baseline	hover:text-yellow hover:underline focus:text-yellow ">
                Home
              </button>
              </Link>

              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline hover:text-yellow hover:underline focus:text-yellow">
                About
              </button>
              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline hover:text-yellow hover:underline focus:text-yellow">
                Skills
              </button>
              <Link href="/blog" passHref>
                <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline hover:text-yellow hover:underline focus:text-yellow">
                  Contact
                </button>
              </Link>
              
            </div>
          </div>
          <div className="flex flex-col space-y-0 tablet:space-y-3 ">
            <span className="hidden mobile:block font-roboto font-bold h5 text-white tablet:self-baseline">
              Contact
            </span>
            <div className="flex flex-col pt-2 tablet:pt-5  space-y-0 tablet:space-y-2">
              <button className="font-roboto text-whiteChange tablet:self-baseline pt-2 tablet:pt-0 hover:text-yellow hover:underline focus:text-yellow  ">
               LinkedIn
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline	pt-[18px] tablet:pt-2 hover:text-yellow hover:underline focus:text-yellow">
                GitHub
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline	pt-[18px] tablet:pt-2 hover:text-yellow hover:underline focus:text-yellow">
                Mail
              </button>
             
            </div>
          </div>
          
        </div>
        <div className="flex justify-center tablet:pt-24 ">
          <hr className="hidden mobile:block text-whiteChange w-[1200px] "></hr>
        </div>
      <div className="flex tablet:justify-start justify-center tablet:pl-18 pt-8 text-white">
      © 2022 Ilker Tastan
      </div>
      </div>
    </div>
    </div>
  );
};

export default BigStore;
