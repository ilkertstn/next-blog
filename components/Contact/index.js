import React, { useRef,useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_417bzjf", e.target, "Th4CoWsKPQicsNv80")
      .then(
        (result) => {
          setSuccess(true)
       
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="dark:bg-darkGrey bg-white">
     
      <div className="container flex flex-col items-center pt-20 pb-20">
        <div className="w-full pl-[60px] tablet:pl-60">
          <motion.div initial={{ y: -250 }} animate={{ y: -10 }}>
            <span className="dark:text-white text-soDarkGrey font-semibold h2 tablet:h1">
              Contact
            </span>

            <p className="text-red200 font-roboto font-medium">
              LET&apos;S TALK
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <form onSubmit={sendEmail} className="space-y-4 pt-5">
            <div className="flex flex-col tablet:flex-row space-y-3 tablet:space-y-0 tablet:space-x-3">
              <div>
                <input
                  className="dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 outline-none dark:text-white text-soDarkGrey"
                  placeholder="Name"
                  name="name"
                ></input>
              </div>
              <div>
                <input
                  className="dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 outline-none dark:text-white text-soDarkGrey"
                  placeholder="Email Address"
                  name="email"
                ></input>
              </div>
              <div>
                <input
                  className="dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 outline-none dark:text-white text-soDarkGrey"
                  placeholder="Subject"
                  name="subject"
                ></input>
              </div>
            </div>
            <div>
              <input
                className="dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 tablet:p-2 tablet:w-[665px] h-[200px] outline-none text-black dark:text-white"
                placeholder="Your Message"
                name="message"
              ></input>
            </div>
            {success?(<div></div> ):
            <div className="col-8 form-group mx-auto">
              <input
                type="submit"
                className="bg-red200 hover:bg-red300 tablet:w-[665px] pl-14 tablet:pl-6 pr-14 tablet:pr-6 pt-3 tablet:pt-2 pb-3 tablet:pb-2 rounded-3xl tablet:rounded-2xl text-white font-roboto cursor-pointer"
                value="Send Message"
              ></input>
            </div>
            }
          </form>
        </motion.div>
        
        {success ? (
          <div>
          <div className="flex flex-col w-full align-center  mt-5">  
            <div className="uppercase font-roboto font-medium pt-5">
            Thanks for contacting
            </div>
          <div className="flex justify-center">  <Image alt="" src={"/images/tick.png"} width={"100px"}
          height={"100px"}></Image></div>
          </div>
          </div>
        ) : ''}
      </div>
      

  
    </div>
  );
};

export default Contact;
