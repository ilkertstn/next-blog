import Contact from '@components/Contact'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import React from 'react'
import Head from 'next/head'

const Contactt = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Navbar/>
        <Contact />
        <Footer/>
    </>
  )
}

export default Contactt