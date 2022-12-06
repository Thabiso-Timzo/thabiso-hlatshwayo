import Head from 'next/head'
import React from 'react'

import Footer from '../components/footer/Footer'
import NavBar from '../components/nav-bar/NavBar'

import Gude from '../components/gude/Gude'
import Trivia from '../components/trivia/Trivia'
import Contact from '../components/contact/Contact'
import Fyur from '../components/fyur/Fyur'
import Thabiso from '../components/thabiso/Thabiso'
import Movie from '../components/movie/Movie'

import trivia from '../public/assets/projects/trivia.png'
import gude from '../public/assets/projects/gude.png'
import contact from '../public/assets/projects/phone.png'
import fyur from '../public/assets/projects/fyur.png'
import thabiso from '../public/assets/projects/thabiso.png'
import movie from '../public/assets/projects/movie.png'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <div className={'h-20'}></div>
      <div className={'w-full'}>
        <div className={'max-w-[1240] mx-auto px-2 py-16'}>
            <p className={'text-xl tracking-widest uppercase text-[#D4AF37] text-center font-bold'}>Projects</p>
            <h2 className={'py-4 text-center'}>What I have built</h2>
            <div className={'grid md:grid-cols-2 gap-8'}>
                <Gude title="Gude" backgroundImg={gude} projectURL={'/projects/gude'}/>
                <Trivia title="Trivia" backgroundImg={trivia} projectURL={'/projects/trivia'}/>
                <Contact title="Contact" backgroundImg={contact} projectURL={'/projects/contacts'}/>
                <Fyur title="Fyer" backgroundImg={fyur} projectURL={'/projects/fyur'}/>
                <Thabiso title="thabiso" backgroundImg={thabiso} projectURL={'/projects/thabiso'}/>
                <Movie title="Movie app" backgroundImg={movie} projectURL={'/projects/movie'}/>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Projects