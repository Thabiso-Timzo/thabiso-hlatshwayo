import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Movie = ({ title, backgroundImg, projectURL }) => {
  return (
    <div className={'relative flex items-center justify-center w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#D4AF37] to-[#D4AF91]'}>
        <Image className={'rounded-xl group-hover:opacity-10'} src={backgroundImg} alt='' />
        <div className={'hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}>
            <h3 className={'text-2xl text-white tracking-wider text-center'}>{title}</h3>
            <p className={'pb-4 pt-2 text-white text-center'}>React.js app</p>
            <Link href={projectURL}>
                <p className={'text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'}>More info</p>
            </Link>
        </div>
    </div>
  )
}

export default Movie