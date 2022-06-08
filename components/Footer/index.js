import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
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
    <div className="dark:bg-soDarkGrey bg-slate100 max-w-screen-md tablet:h-[600px]">
      <div className="flex flex-col text-center pt-10 tablet:pt-20">
 

          
          <div className="flex flex-col tablet:flex-row columns-3 pt-0 tablet:pt-20 justify-center tablet:space-x-36 ">
            <div className="tablet:text-left">
            <div className="text-white font-roboto font-bold h2 w-full tablet:w-full tablet:pl-8  ">
          <Image
            className="rounded-full"
            alt="img"
            src="/images/ilker.jpg"
            height={50}
            width={50}
          />
          <span className="text-soDarkGrey dark:text-white pl-4">Ilker Tastan</span>
        </div>
        <div className=" font-roboto dark:text-whiteChange text-soDarkGrey p-[2rem] ">
          I create user-friendly websites that your users will love. I&lsquo;m
          with you from start<br></br> to finish to make sure you achieve your
          goals and that your users are happy.
        </div>
        <div className="flex justify-between max-w-[350px] m-auto py-2">
            <Link
              passHref
              href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/"
            >
              <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-150 ease-in duration-200 dark:text-white dark:hover:text-blue hover:text-blue text-soDarkGrey">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link passHref href="https://github.com/ilkertstn">
              <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-150 ease-in duration-200 dark:text-white text-soDarkGrey">
                <FaGithub />
              </div>
            </Link>
            <div className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-150 ease-in duration-200 dark:text-white dark:hover:text-red300 hover:text-red300  text-soDarkGrey">
              <AiOutlineMail />
            </div>
            
          </div>
            </div>
            
            <div className="flex flex-col space-y-7 tablet:space-y-3 ">
              <span className="hidden mobile:block font-roboto font-bold h5 dark:text-white text-soDarkGrey tablet:self-baseline	">
                Quick Links
              </span>
              <div className="flex flex-col pt-2 tablet:pt-5 space-y-0 tablet:space-y-2">
                <Link href="/blog" passHref>
                  <button className="font-roboto text dark:text-whiteChange text-soDarkGrey tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow	hover:text-yellow hover:underline focus:text-yellow font-medium">
                    Home
                  </button>
                </Link>
                <Link passHref href="/about">
                  <button className="font-roboto dark:text-whiteChange text-soDarkGrey pt-[18px] tablet:pt-2 tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                    About
                  </button>
                </Link>
                <button className="font-roboto dark:text-whiteChange text-soDarkGrey pt-[18px] tablet:pt-2 tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                  Skills
                </button>
                <Link href="/contact" passHref>
                  <button className="font-roboto dark:text-whiteChange text-soDarkGrey pt-[18px] tablet:pt-2 tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-0 tablet:space-y-3 ">
              <span className="hidden mobile:block font-roboto font-bold h5 dark:text-white text-soDarkGrey tablet:self-baseline">
                Contact
              </span>
              <div className="flex flex-col pt-2 tablet:pt-5  space-y-0 tablet:space-y-2">
                <Link
                  passHref
                  href="https://tr.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a"
                >
                  <button className="font-roboto dark:text-whiteChange text-soDarkGrey tablet:self-baseline pt-2 tablet:pt-0 dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium ">
                    LinkedIn
                  </button>
                </Link>
                <Link passHref href="https://github.com/ilkertstn">
                  <button className="font-roboto dark:text-whiteChange text-soDarkGrey tablet:self-baseline	pt-[18px] tablet:pt-2 dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                    GitHub
                  </button>
                </Link>
                <button className="font-roboto dark:text-whiteChange text-soDarkGrey tablet:self-baseline	pt-[18px] tablet:pt-2 dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                  Mail
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center tablet:pt-24 ">
            <hr className="hidden mobile:block dark:text-whiteChange text-soDarkGrey w-[1200px] "></hr>
          </div>
          <div className="flex tablet:justify-start justify-center tablet:pl-18 pt-8 dark:text-white text-soDarkGrey font-roboto">
            © 2022 Ilker Tastan
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
