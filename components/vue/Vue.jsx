import Image from 'next/image'
import React from 'react'

import vue from '../../public/assets/skills/vue.png'

const Vue = () => {
  return (
    <div className={'p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'}>
        <div className={'grid grid-cols-2 gap-4 justify-center items-center'}>
            <div className={'m-auto'}>
                <Image
                    src={vue}
                    alt='' 
                    width={'64'} 
                    height={'64'} 
                />
            </div>
            <div className={'flex flex-col items-center justify-center'}>
                <h3>Vue</h3>
            </div>
        </div>
     </div>
  )
}

export default Vue