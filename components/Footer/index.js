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
    <div className="dark:bg-soDarkGrey bg-slate100 max-w-screen-md tablet:h-[screen]">
      <div className="flex flex-col  ">
        <div className="flex flex-col tablet:flex-row columns-3 pt-0 tablet:pt-20 justify-center tablet:space-x-36 ">
          <div className="tablet:text-left">
            <div className="text-white font-roboto font-bold h2 w-full pl-7 pt-4 lg-tablet:pt-0 ">
              <Image
                className="rounded-full"
                alt="img"
                src="/images/ilker.jpg"
                height={50}
                width={50}
              />
              <span className="text-soDarkGrey dark:text-white pl-4">
                İlker Taştan
              </span>
            </div>
            <div className=" font-roboto dark:text-whiteChange text-soDarkGrey p-[2rem] ">
              I create user-friendly websites that your users will love.
              I&lsquo;m with you from start<br></br> to finish to make sure you
              achieve your goals and that your users are happy.
            </div>
            <div className="flex justify-between max-w-[350px] m-auto py-2">
              <Link
                passHref
                href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/"
              >
                <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-110 ease-in duration-200 bg-blue text-white">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link passHref href="https://github.com/ilkertstn">
                <div className="rounded-full shadow-lg  p-3 cursor-pointer hover:scale-110 ease-in duration-200 bg-black dark:bg-white text-white dark:text-black">
                  <FaGithub />
                </div>
              </Link>
              <Link passHref href="mailto:ilkertstn@gmail.com">
                <div className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-110 ease-in duration-200 bg-red300 text-white">
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-18 pt-6 lg-tablet:pt-5">
            <div className="flex flex-col tablet:space-y-3 ">
              <span className=" font-roboto font-bold h5 dark:text-white text-soDarkGrey tablet:self-baseline	">
                Quick Links
              </span>
              <div className="flex flex-col pt-2 tablet:pt-5 space-y-0 tablet:space-y-2">
                <Link href="/blog" passHref>
                  <button className="font-roboto text dark:text-whiteChange text-soDarkGrey tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow	hover:text-yellow hover:underline focus:text-yellow font-medium">
                    Home
                  </button>
                </Link>
                <Link passHref href="/blog">
                  <button className="font-roboto dark:text-whiteChange text-soDarkGrey pt-[18px] tablet:pt-2 tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                    Blog
                  </button>
                </Link>
                <Link passHref href="/about">
                <button className="font-roboto dark:text-whiteChange text-soDarkGrey pt-[18px] tablet:pt-2 tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                  About
                </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className=" font-roboto dark:text-whiteChange text-soDarkGrey pt-[18px] tablet:pt-2 tablet:self-baseline dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-0 tablet:space-y-3  ">
              <span className=" font-roboto font-bold h5  tablet:pt-9 lg-tablet:pt-0 dark:text-white text-soDarkGrey tablet:self-baseline">
                Contact
              </span>
              <div className="flex flex-col pt-0 tablet:pt-5 space-y-0 tablet:space-y-2">
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
                <Link passHref href="mailto:ilkertstn@gmail.com">
                  <button className="font-roboto dark:text-whiteChange text-soDarkGrey tablet:self-baseline	pt-[18px] tablet:pt-2 dark:hover:text-yellow dark:focus:text-yellow hover:text-yellow hover:underline focus:text-yellow font-medium">
                    Mail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg-tablet:pt-8 tablet:pt-12 ">
          <hr className="hidden mobile:block dark:text-whiteChange text-soDarkGrey tablet:w-[720px] lg-tablet:w-[1200px] "></hr>
        </div>
        <div className="flex justify-center mx-[72px] pt-8 dark:text-white text-soDarkGrey font-roboto">
          © 2022 İlker Taştan
        </div>
      </div>
    </div>
  );
};

export default Footer;
