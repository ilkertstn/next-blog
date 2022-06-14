import React from "react";
import Image from "next/image";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="dark:bg-darkGrey bg-white w-full">
      <main className="pb-20">
        <motion.div initial={{ y: -250 }} animate={{ y: -10 }}>
          <div className="dark:text-white text-soDarkGrey text-center m pt-28">
            <h4 className="my-6">Hi there!</h4>
            <h1 className="font-semibold mb-10">I&apos;m İlker Taştan</h1>
          </div>
        </motion.div>
        <section className="container ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col tablet:flex-row tablet:-mx-8 tablet:py-8 items-center">
              <div className="w-[335px] tablet:w-[400px] h-[350px] tablet:h-[400px] relative ">
                <Image
                  className="rounded-lg"
                  alt="img"
                  src="/images/ilker.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="w-full tablet:w-7/12 my-8 tablet:my-0 tablet:mx-8 dark:text-white text-soDarkGrey">
                <p className="mb-[1rem] font-roboto">
                  I am a junior front-end developer working to help build
                  user-friendly and practical websites.
                </p>
                <p className="mb-[1rem] font-roboto">
                  I&lsquo;ve been a developer since I started my career for
                  about 3 months now and I try to do the best they can for
                  everyone who uses websites.
                </p>
                <p className="mb-[1rem] font-roboto">
                  Now I design and develop beautiful websites focused on
                  providing the best experience for everyone who uses them,
                  allowing your team to easily edit these websites while giving
                  your users the best experience.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col tablet:flex-row-reverse  tablet:-mx-8 tablet:py-8 items-center ">
              <div className="w-[335px] tablet:w-[500px] h-[380px] tablet:h-[400px] relative">
                <Image
                  className="rounded-lg"
                  alt="img"
                  src="/images/ilker2.jpeg"
                  layout="fill"
                  objectFit="fill"
                ></Image>
              </div>
              <div className="w-full tablet:md:w-5/12 mx-8 py-10 ">
                <div className="dark:text-white text-soDarkGrey">
                  <p className="mb-[1rem] font-roboto">
                    I have always loved technology. I was interested in
                    technology from a young age. Most kids play a lot of video
                    games, from Atari to Playstation to Gameboy to Computer, I
                    loved playing with them, but my interest didn&#39;t end in
                    entertainment.
                  </p>
                  <p className="mb-[1rem] font-roboto">
                    The more I played, the more I wanted to understand how
                    things worked. If something broke, I would take it apart and
                    figure out what went wrong and try to get it back to normal.
                    I usually couldn&#39;t restore it.
                  </p>
                  <p className="mb-[1rem] font-roboto">
                    I never lost my curiosity, but my interest in technologies
                    changed as I expanded my knowledge from breaking down
                    equipment to building new websites with code.
                  </p>
                  <p className="mb-[1rem] font-roboto">
                    Now I focus on learning about people and how they interact
                    with websites, making sure they can achieve their goals,
                    leaving them satisfied and making them more likely to return
                    as customers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className=" flex flex-col tablet:flex-row tablet:-mx-8 py-8 items-center ">
              <div className="w-[300  px] tablet:w-[400px] h-[380px] relative">
                <Image
                  className="rounded-lg"
                  alt="img"
                  src="/images/skills.png"
                  layout="fill"
                />
              </div>
              <div className="w-full tablet:w-7/12 mx-8 py-10  dark:text-white text-soDarkGrey">
                <p className="mb-[1rem] font-roboto">
                  I am currently working on a project that is growing and I am
                  improving myself day by day. I think that when this project is
                  finalized, I will have crossed an important threshold.
                </p>
                <p className="mb-[1rem] font-roboto">
                  Here are just a few of the tools I&#39;ve worked with in the
                  past. I&#39;m always open to adding more to this list if they
                  will help the project that needs it.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default About;
