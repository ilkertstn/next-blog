import React from 'react'
import Link from 'next/link'

const FooterItem2 = () => {
  return (
    <ul className='space-y-7 z-10'>
        <li className='font-bold'>Quick Links</li>
        <Link href="/blog" passHref>
        <li className='cursor-pointer hover:text-yellow hover:underline'>Home</li>
        </Link>
        <Link passHref href="/blog">
        <li className='cursor-pointer hover:text-yellow hover:underline'>Blog</li>
        </Link>
        <Link passHref href="/about">
        <li className='cursor-pointer hover:text-yellow hover:underline'>About</li>
        </Link>
        <Link href="/contact" passHref>
        <li className='cursor-pointer hover:text-yellow hover:underline'>Contact</li>
        </Link>
    </ul>
  )
}

export default FooterItem2