import BigStore from '@components/BigStore';
import Navbar from '@components/Navbar';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_417bzjf', e.target, 'Th4CoWsKPQicsNv80')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className='dark:bg-darkGrey bg-white'>
      <Navbar />
      <div className='container flex flex-col items-center mb-20 pt-20'>
      <div className='w-full pl-[60px] tablet:pl-60'>
        <h1 className='dark:text-white text-soDarkGrey'>Contact</h1>
        <p className='text-red200 font-roboto font-medium'>LET&apos;S TALK</p>
      </div>
      <form onSubmit={sendEmail} className='space-y-4 pt-5'>
        <div className='flex flex-col tablet:flex-row space-y-3 tablet:space-y-0 tablet:space-x-3'>
        <div>
        <input className='dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 outline-none dark:text-white text-soDarkGrey' placeholder='Name' name='name'></input>
        </div>
        <div>
        <input className='dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 outline-none dark:text-white text-soDarkGrey' placeholder='Email Address' name='email'></input>
        </div>
        <div>
        <input className='dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 outline-none dark:text-white text-soDarkGrey' placeholder='Subject' name='subject'></input>
        </div>
        </div>
        <div>
        <input className='dark:bg-soDarkGrey bg-lightGrey rounded-2xl p-4 tablet:p-2 tablet:w-[665px] h-[200px] outline-none text-white dark:text-soDarkGrey' placeholder='Your Message' name='message'></input>
        </div>
        <div className='col-8 form-group mx-auto'>
           <input type="submit" className='bg-red200 hover:bg-red300 tablet:w-[665px] pl-14 tablet:pl-6 pr-14 tablet:pr-6 pt-3 tablet:pt-2 pb-3 tablet:pb-2 rounded-3xl tablet:rounded-2xl text-white font-roboto cursor-pointer' value="Send Message"></input>
           </div>
      </form>
      </div>
      
      <BigStore/>
    </div>
  )
}

export default Contact