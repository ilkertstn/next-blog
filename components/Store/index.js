import React from "react";
import Image from "next/image";
const Store = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[350px] tablet:w-[850px] h-[800px] tablet:h-[406px] bg-grey rounded-2xl ">
        <div className="flex flex-row pt-[50px] tablet:pt-0 pl-[25px] tablet:pl-[60px] tablet:padding-[60px]">
          <div className="flex flex-col  justify-center pt-[175px] tablet:pt-0">
            <div className="font-roboto font-bold h2 w-[20rem] text-blackChange pt-20">
              Lets try out Onir for Free
            </div>
            <div className="font-roboto text-grey w-[270px] tablet:w-[20rem] h-[6rem] pt-3">
              Download our latest version and please don’t forget to rate.
            </div>
            <div className="flex flex-col tablet:flex-row tablet:space-x-10 space-y-4 tablet:space-y-0 pl-[50px] tablet:pl-0 ">
              <button className="font-roboto font-bold">
                <div className="absolute pl-10 pt-4">
                  <Image
                    src="/images/apple.png"
                    alt=""
                    height={40}
                    width={40}
                  ></Image>
                </div>

                <div className="border-2 w-[210px] h-[70px] rounded-xl pl-12 pt-5">
                  App Store
                </div>
              </button>
              <button className="font-roboto font-bold">
                <div className="absolute pl-10 pt-4">
                  <Image
                    src="/images/android.png"
                    alt=""
                    height={35}
                    width={35}
                  ></Image>
                </div>

                <div className="border-2 w-[210px] h-[70px] rounded-xl pl-12 pt-5">
                  Play Store
                </div>
              </button>
            </div>
            <div className="absolute mb-[700px] tablet:mt-[640px] h-[400px] tablet:h-[420px] w-[300px] tablet:w-[250px]  tablet:ml-[500px]">
            <Image
              src="/images/phone.png"
              alt=""
              layout="fill"
            ></Image>
          </div>  
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Store;
