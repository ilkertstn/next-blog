import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";

const comingSoon = () => {
  return (
    <div className="container mt-8">
      <div className="flex flex-row justify-between">
        <Link passHref={true} href="/">
          <button className="font-pacifico h3 text-orange h3 flex">
            Petupp
          </button>
        </Link>
        <button
          className="font-roboto border border-blue rounded py-2 px-4 bg-blue text-white flex flex-end"
          href="#"
        >
          Contact
        </button>
      </div>
      <div className="flex flex-col tablet:flex-row">
        <div className="flex relative left-28">
          <Image
            src="/images/logopetupp.png"
            alt="logo"
            width={420}
            height={420}
          />
        </div>

        <div className="flex flex-col">
          <div className="text-orange font-creteRound text-h3 relative left-28 top-32">
            We&rsquo;re Coming Soon.
          </div>
          <div className="font-roboto text-grey tiny relative left-28 top-32">
            Our website is under construction. We&rsquo;ll be here soon with our
            <br></br> new awesome site, subscribe to be notified.
          </div>
          <CountdownTimer countdownTimestampMs={1654060562000} />
          <input
            className="relative left-32 top-44 outline-0"
            placeholder="Enter your email adress"
          ></input>
          <hr className="relative left-32 top-44"></hr>
        </div>
      </div>
    </div>
  );
};

export default comingSoon;
  