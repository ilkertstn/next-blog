
import React from 'react'

const Comment = ({buttonName}) => {
  return (
    <div className='flex flex-col space-y-8  '>
        <div>
            <textarea className="bg-grey text-white h-[200px] tablet:h-[150px] w-[100%] tablet:w-[700px] rounded-xl p-4 pb-18 outline-0 font-roboto resize-none " placeholder="Comments"></textarea>
            </div>
            <div className="tablet:space-x-12 space-y-6 tablet:space-y-0">
              <textarea className="bg-grey text-white h-18 tablet:h-14 w-[100%] tablet:w-[325px] rounded-xl pl-5 pt-5 outline-0 font-roboto resize-none " placeholder="Name"></textarea>
              <textarea className="bg-grey text-white  h-18 tablet:h-14 w-[100%] tablet:w-[325px] rounded-xl pl-5 pt-5 outline-0 font-roboto resize-none" placeholder="Email"></textarea>
            </div>
            <div className="tablet:space-x-12 space-y-6 tablet:space-y-0 ">
              <textarea className="bg-grey text-white  h-18 tablet:h-14 w-[100%] tablet:w-[325px] rounded-xl pl-5 pt-5 outline-0 font-roboto resize-none" placeholder="Phone no."></textarea>
              <textarea className="bg-grey text-white  h-18 tablet:h-14 w-[100%] tablet:w-[325px] rounded-xl pl-5 pt-5 outline-0 font-roboto resize-none" placeholder="Website"></textarea>
            </div>
            <button className="text-white font-roboto border-blue bg-blue rounded-2xl w-[100%] tablet:w-56 h-16 tablet:h-14 pt-1 font-semibold h7">
              {buttonName}
            </button>
    </div>
  ) 
}

export default Comment