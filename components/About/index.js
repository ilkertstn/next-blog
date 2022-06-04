import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-darkGrey w-full">
      <main>
        <div className="text-white text-center m pt-28">
          <h4 className="my-6">Hi there!</h4>
          <h1 className="font-semibold mb-10">I&apos;m Ilker Tastan</h1>
        </div>
        <section className="container">
          <div className=" flex flex-row-normal -mx-8 py-8 items-center">
            <div>
              <Image
                className="rounded-lg"
                alt="img"
                src="/images/ilker.jpg"
                height={400}
                width={400}
              />
            </div>
            <div className="w-full tablet:w-7/12 tablet:mx-8 text-white">
              <p className="mb-[1rem]">
                I am a junior front-end developer working to help build
                user-friendly and practical websites.
              </p>
              <p className="mb-[1rem]">
                I&lsquo;ve been a developer since I started my career for about
                3 months now and I try to do the best they can for everyone who
                uses websites.
              </p>
              <p className="mb-[1rem]">
                Now I design and develop beautiful websites focused on providing
                the best experience for everyone who uses them, allowing your
                team to easily edit these websites while giving your users the
                best experience.
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="tablet:flex tablet:-mx-8 py-8 items-center tablet:flex-row-reverse">
            <div className="w-full tablet:md:w-5/12 md:mx-8 mb-6">
              <div className="px-4">
                <Image
                  className="rounded-lg"
                  alt="img"
                  src="/images/ilker2.jpeg"
                  height={500}
                  width={400}
                ></Image>
              </div>
            </div>
            <div className="text-white">
              <p className="mb-[1rem]">
                I have always loved technology. I was interested in technology
                from a young age. Most kids play a lot of video games, from
                Atari to Playstation to Gameboy to Computer, I loved playing
                with them, but my interest didn&#39;t end in entertainment.
              </p>
              <p className="mb-[1rem]">
                The more I played, the more I wanted to understand how things
                worked. If something broke, I would take it apart and figure out
                what went wrong and try to get it back to normal. I usually
                couldn&#39;t restore it.
              </p>
              <p className="mb-[1rem]">
                I never lost my curiosity, but my interest in technologies
                changed as I expanded my knowledge from breaking down equipment
                to building new websites with code.
              </p>
              <p className="mb-[1rem]">
                Now I focus on learning about people and how they interact with
                websites, making sure they can achieve their goals, leaving them
                satisfied and making them more likely to return as customers.
              </p>
            </div>
          </div>
        </section>
        <section className="container">
          <div className=" flex flex-row-normal -mx-8 py-8 items-center">
            <div>
              <Image
                className="rounded-lg"
                alt="img"
                src="/images/skills.png"
                height={400}
                width={400}
              />
            </div>
            <div className="w-full tablet:w-7/12 tablet:mx-8 text-white">
              <p className="mb-[1rem]">
              I am currently working on a project that is growing and I am improving myself day by day. I think that when this project is finalized, I will have crossed an important threshold.

              </p>
              <p className="mb-[1rem]">
              Here are just a few of the tools I&#39;ve worked with in the past. I&#39;m always open to adding more to this list if they will help the project that needs it.
              </p>
           
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
