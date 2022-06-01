import React, {useState} from "react";
import Navbar from "@components/Navbar";
import Title from "@components/Title";
import Image from "next/image";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <div className=" bg-red50 fixed w-full ">
      <Navbar />
      <div className="flex flex-col mt-18 tablet:mt-28">
        <div>
          <Title title="Jump Start Your Business to Next Level." />
        </div>
        <div>
          <Title
            description="Improving your small business’s growth through Onir app. It also help to improve your
        customer service and make more money quickly."
          />
        </div>
        <div className="flex flex-col tablet:flex-row space-y-8 tablet:space-y-0 tablet:space-x-8 justify-center tablet:pt-12 pl-[18%] tablet:pl-0  ">
          <button className="font-roboto font-bold">
            <div className="absolute pl-14 pt-4">
              <Image
                src="/images/apple.png"
                alt=""
                height={40}
                width={40}
              ></Image>
            </div>

            <div className="border-2 w-[250px] h-[70px] rounded-2xl pl-12 pt-5">
              App Store
            </div>
          </button>

          <button className="font-roboto font-bold">
            <div className="absolute pl-15 pt-4">
              <Image
                src="/images/android.png"
                alt=""
                height={40}
                width={35}
              ></Image>
            </div>

            <div className="border-2 w-[250px] h-[70px] rounded-2xl pl-12 pt-5">
              Play Store
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
