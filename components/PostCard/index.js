import React from 'react'

const PostCard = ({time,title,content}) => {
  return (
    <div>
        <div className="bg-grey w-[100%] tablet:w-[270px] h-[245px] rounded-xl relative ">
               <span className="absolute pl-28 tablet:pl-12 pt-4 tiny text-grey">{time}</span>
               <div className="absolute  bg-white w-[92%] tablet:w-[88%] h-[130px] mt-[100px] ml-4 rounded-xl "> 
                <div className="absolute mt-4 ml-14 tablet:ml-0 space-y-2 ">
                  <div className="font-bold w-[200px] pl-9 ">{title}</div>
                  <div className="text-grey tiny w-[210px] pl-8 ">{content}</div>
                  <button className=" tiny text-blue font-bold pl-6">Read Story</button>
                </div>
               </div>
              </div>
    </div>
  )
}

export default PostCard