import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import NavBar from '../../../components/nav-bar/NavBar'
import Footer from '../../../components/footer/Footer'
import react from '../../../public/assets/skills/react.png'
import redux from '../../../public/assets/skills/redux.png'
import mongo from '../../../public/assets/skills/mongodb.png'
import express from '../../../public/assets/skills/express.png'
import css from '../../../public/assets/skills/css.png'
import node from '../../../public/assets/skills/node.png'

const Index = () => {
  return (
    <div>
      <Head>
          <title>Express</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <div className={'w-full'}>
        <div className={'w-screen h-[25vh] lg:h-[40vh relative]'}>
          <div className={'absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10'}>
            <div className={'absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'}>
              <Link href={'/projects'}>
                <div className={'ml-5 mb-5 text-2xl cursor-pointer w-3 h-3 rounded-full hover:text-[#D4AF37]'}>
                  <BsFillArrowLeftCircleFill />
                </div>
              </Link>
              <h2 className={'text-[#fff] text-center'}>Express store</h2>
              <div className={'flex justify-center gap-4 mt-5'}>
                <Image src={react} alt={''} width={'20'} height={'15'}/>
                <Image src={redux} alt={''} width={'20'} height={'15'}/>
                <Image src={mongo} alt={''} width={'10'} height={'15'}/>
                <Image src={express} alt={''} width={'20'} height={'15'}/>
                <Image src={node} alt={''} width={'20'} height={'15'}/>
                <Image src={css} alt={''} width={'20'} height={'15'}/>
              </div>
            </div>
          </div>
        </div>
        <div className={'h-10'}></div>
        <div className={'max-w-[1240px mx-auto p-10 pt-20'}>
          <div className={'col-span-4'}>
            <p>Project</p>
            <h3 className={'mt-2'}>Overview</h3>
            <h4 className={'mt-2'}>Project is currently in development.</h4>
            <p className={'mt-2'}>
              I'm using MERN Stack for this project, and only an administrator, 
              and students are allowed to sell items. You should be able to sign up using your tertiary 
              email address as a student. The project offers a chat area where users and students can 
              haggle over the cost of various things. The item can be sent by the official delivery system, 
              or a student or user can choose another method. PayPal serves as the app's payment gateway.
            </p>
            <div className={'mt-10'}>
              
                  <Link 
                    href={'https://github.com/Thabiso-Timzo/express-store-web'}
                    className={'px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200'}
                  >
                    Source Code
                  </Link>
                
            </div>
            <div className={'mt-10'}>                
              <Link 
                href={'/docs/gude'}
                className={'px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200'}
              >
                API documentation
              </Link>    
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index