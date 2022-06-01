import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="bg-blackChange max-w-screen-md tablet:h-[1300px]">
      <div className="flex flex-col text-center pt-80">
        <div className="text-white font-roboto font-bold h2 w-[100px] tablet:w-full pl-[110px] tablet:pl-0  ">
          Subscribe Newsletter
        </div>
        <div className="font-roboto text-whiteChange pt-2">
          Suspendisse tincidunt sapien feliuentum
        </div>
        <div className="flex flex-row justify-center pt-10  space-x-12">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col tablet:flex-row space-x-0 tablet:space-x-10 space-y-8 tablet:space-y-0"
          >
            <input
              name="email"
              onChange={onChange}
              value={email}
              placeholder="Enter your email address"
              className="p-4 rounded-2xl text-whiteChange border-[1px] w-[350px] h-[80px] tablet:h-auto border-whiteChange bg-blackChange"
            ></input>
            <div>
              <button className="bg-grey w-[360px] tablet:w-40 h-[90px] tablet:h-[60px] rounded-2xl tablet:rounded-xl font-roboto font-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center pt-20 ">
          <hr className="hidden mobile:block text-whiteChange w-[1000px] "></hr>
        </div>
        <div className="flex flex-col tablet:flex-row pt-0 tablet:pt-44 justify-center tablet:space-x-36">
          <div className="flex flex-col space-y-0  tablet:space-y-3  ">
            <Link href="https://petupp.com" passHref>
              <button className="font-pacifico h4 text-white tablet:self-baseline">
                TASTAN
              </button>
            </Link>

            <div className="flex flex-col pt-5 tablet:space-y-2  ">
              <button className="font-roboto text-whiteChange  tablet:self-baseline	">
                hello@onirapp.com
              </button>
              <button className="font-roboto text-whiteChange pt-2 tablet:self-baseline	">
                +1-800-123 4567
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-7 tablet:space-y-3 ">
            <button className="hidden mobile:block font-roboto font-bold h5 text-white tablet:self-baseline	">
              Company
            </button>
            <div className="flex flex-col pt-2 tablet:pt-5 space-y-0 tablet:space-y-2">
              <button className="font-roboto text-whiteChange tablet:self-baseline	">
                About
              </button>

              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline">
                Services
              </button>
              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline	">
                Careers
              </button>
              <Link href="/blog" passHref>
                <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline	">
                  Blog
                </button>
              </Link>
              <button className="font-roboto text-whiteChange pt-[18px] tablet:pt-2 tablet:self-baseline">
                Pricing
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-0 tablet:space-y-3 ">
            <button className="hidden mobile:block font-roboto font-bold h5 text-white tablet:self-baseline">
              Contact
            </button>
            <div className="flex flex-col pt-2 tablet:pt-5  space-y-0 tablet:space-y-2">
              <button className="font-roboto text-whiteChange tablet:self-baseline pt-2 tablet:pt-0 ">
                Help
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline	pt-[18px] tablet:pt-2">
                FAQs
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline	pt-[18px] tablet:pt-2">
                Press
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline tablet:w-[140px] pt-[18px] tablet:pt-2	">
                Terms & Conditions
              </button>
              <button className="font-roboto text-whiteChange tablet:self-baseline pt-[18px] tablet:pt-2">
                Partners
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-0 tablet:space-y-5 ">
            <div className="flex flex-row space-x-5 justify-center tablet:justify-start pt-14 tablet:pt-0">
              <Link href="https://facebook.com/" passHref>
                <button>
                  {" "}
                  <Image
                    src="/images/Facebook.png"
                    alt=""
                    height={27}
                    width={27}
                  ></Image>
                </button>
              </Link>
              <Link href="https://twitter.com/" passHref>
                <button>
                  {" "}
                  <Image
                    src="/images/Twitter.png"
                    alt=""
                    height={27}
                    width={27}
                  ></Image>
                </button>
              </Link>
              <Link href="https://www.instagram.com/" passHref>
                <button>
                  {" "}
                  <Image
                    src="/images/Instagram.png"
                    alt=""
                    height={27}
                    width={27}
                  ></Image>
                </button>
              </Link>
            </div>
            <div className="font-roboto text-white tablet:self-baseline pt-[18px] tablet:pt-2 	">
              Let’s try out!
            </div>
            
            <div className="tablet:flex flex-col space-y-4 pt-[18px] tablet:pt-2">
              <button className="font-roboto font-bold ">
                <div className="absolute pl-10 pt-4">
                  <Image
                    src="/images/apple.png"
                    alt=""
                    height={40}
                    width={40}
                  ></Image>
                </div>

                <div className="border-2 w-[210px] h-[70px] rounded-2xl pl-12 pt-5  bg-white border-none">
                  App Store
                </div>
              </button>
              <button className="font-roboto font-bold ">
                <div className="absolute pl-10 pt-4">
                  <Image
                    src="/images/android.png"
                    alt=""
                    height={40}
                    width={40}
                  ></Image>
                </div>

                <div className="border-2 w-[210px] h-[70px] rounded-2xl pl-12 pt-5 bg-white border-none">
                  Play Store
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigStore;
