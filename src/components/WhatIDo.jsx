import { values } from '@/constants'
import React, { useState } from 'react'
import SmallCard from './ui/SmallCard'
import Button from './Button'

const WhatIDo = () => {
  return (
    <div className=' bg-accent w-full flex flex-col text-foreground pb-10  gap-4 justify-center items-center'>
        <div className='py-10 px-2 flex flex-col justify-around items-center gap-3'>
            <h2 className='h2'>What i do?</h2>
            <p className='font-light text-sm'>from content strategy to ads managment, i design merketing solutions that help business reach the right audeience increase engagment and drive mesurable results.</p>
        </div>
        <div className='w-full  h-90 overflow-hidden'>
            <div className="flex flex-col gap-5 justify-center items-center pt-5 animate-scroll-up hover:animate-none">
                {values.MyWork.map(item=>(
                    <SmallCard item={item}/>
                ))}
                {values.MyWork.map(item=>(
                    <SmallCard item={item}/>
                ))}
            </div>
        </div>
        <Button>see All...</Button>
    </div>
  )
}

export default WhatIDo