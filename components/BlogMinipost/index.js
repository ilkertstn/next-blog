import React from 'react'
import Image from 'next/image'
const BlogMiniPost = ({name,time,content,image}) => {
  return (
    <div className='flex justify-start '>
        <div className="flex flex-row space-x-14">
                <div className='flex w-[180px] tablet:min-h-[auto] tablet:w-[60px] tablet:justify-center relative h-[60px]'>
                  <Image
                    className="rounded-2xl"
                    src={image}
                    alt=""
                   layout='fill'
                   objectFit='cover'
                  />
                  
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="text-grey text-tiny">{time}</div>
                  <div className="font-bold">{name}</div>
                  <div className="text-grey text-tiny tablet:w-[450px]">
                  {content.length > 200 ? `${content.slice(0, 199)}...` : content}
                  </div>
                </div>
              </div>
    </div>
  )
}

export default BlogMiniPost