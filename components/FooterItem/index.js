import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const FooterItem = () => {
  return (
    <ul className="space-y-4">
      <div className="relative w-[50px] h-[50px]">
        <Image
          alt="img"
          src="/images/ilker.jpg"
          layout="fill"
          className="rounded-full"
        ></Image>
      </div>
      <h5>İlker Taştan</h5>
      <li className="w-full">
        I create user-friendly websites that your users will love. I‘m with you
        from start to finish to make sure you achieve your goals and that your
        users are happy.
      </li>
      <li className="text-red200">You can find it here:</li>
      <ul className="flex space-x-3">
        <Link
          passHref
          href="https://www.linkedin.com/in/ilker-ta%C5%9Ftan-90402217a/"
        >
          <li className="cursor-pointer">
            <FaLinkedinIn />
          </li>
        </Link>
        <Link passHref href="https://github.com/ilkertstn">
          <li className="cursor-pointer">
            <FaGithub />
          </li>
        </Link>
        <Link passHref href="mailto:ilkertstn@gmail.com">
          <li className="cursor-pointer">
            <AiOutlineMail />
          </li>
        </Link>
      </ul>
    </ul>
  );
};

export default FooterItem;
