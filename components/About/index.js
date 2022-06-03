import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" w-full md:h-screen p-10 flex items-center justify-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-col-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] font-medium">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I&lsquo;m 27 years old and I&lsquo;ve been working as a front-end developer for
            about 6 months. Before the software industry, I was in the real
            estate industry and wanted to do something more professional and
            creative. Therefore, I want to improve myself and be permanent in
            this sector. I hope I can do this. 
          </p>
          <p className="py-2 text-gray-600">I think I learned quickly. I have
            coded with HTML, CSS, Javascript, React.js, Next.js and Tailwind and
            I am improving myself by making different projects as much as
            possible.</p>
          
        </div>
        <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center pt-6  hover:scale-105 ease-in duration-300">
             <Image className="rounded-xl" src="https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              width={560}
              height={360}
             alt="resim"
             objectFit="cover"
             ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
