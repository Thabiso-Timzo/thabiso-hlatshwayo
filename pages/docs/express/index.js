import React from 'react'
import Head from 'next/head'

import NavBar from '../../../components/nav-bar/NavBar'
import Footer from '../../../components/footer/Footer'

const Index = () => {
  return (
    <>
        <Head>
            <title>Gude API Docs</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <NavBar />
        <div className={'h-20'}></div>
        <div className={'w-full h-16 pt-20'}>
            <h1 className={'font-bold text-[#D4AF37] text-center'}>Documentation coming soon</h1>
        </div>
        <Footer />
    </>
  )
}

export default Index