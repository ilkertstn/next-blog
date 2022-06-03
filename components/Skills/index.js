import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div className="w-full lg:h-screen md:pt-[300px] md:pl-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] pl-6 pt-10 font-medium   ">
          Skills
        </p>
        <h2 className="pl-6 pt-10">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-4 gap-4 justify-center items-center p-2 w-[400px] bg-grey">
              <div className="m-auto">
                <Image
                  src="/images/html.png"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-4 gap-4 justify-center items-center p-2 w-[400px] bg-grey">
              <div className="m-auto">
                <Image
                  src="/images/css.png"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-4 gap-4 justify-center items-center p-2 w-[400px] bg-grey">
              <div className="m-auto">
                <Image
                  src="/images/javascript.png"
                  width="64px"
                  height="64px"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-4 gap-4 justify-center items-center p-2 w-[400px] bg-grey">
              <div className="m-auto">
                <Image
                  src="/images/react.png"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-4 gap-4 justify-center items-center p-2 w-[400px] bg-grey">
              <div className="m-auto">
                <Image
                  src="/images/tailwind.png"
                  width="64px"
                  height="64px"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-4 gap-4 justify-center items-center p-2 w-[400px] bg-grey">
              <div className="m-auto">
                <Image
                  src="/images/github1.png"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Skills;