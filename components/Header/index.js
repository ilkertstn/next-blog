import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Image from "next/image";
const Header = () => {
  return (
    <div className="dark:bg-darkGrey bg-white ">
      <Navbar />
      <div className="dark:bg-soDarkGrey min-h-screen flex items-center justify-center">
        <div className="w-[400px] h-[400px] relative">
          <Image
            className="rounded-full"
            alt=""
            src="https://images.pexels.com/photos/6044830/pexels-photo-6044830.jpeg?auto=compress&cs=tinysrgb&w=600"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-white">
          <h2>
            Hi!
            <br />
            It&lsquo;s me
            <br />
            İlker
          </h2>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
