import React from 'react'
import Button from './Button'
import { Images } from '@/constants'

const Hero = () => {
  return (
    <>
      <header className='flex flex-col justify-center items-center mt-10'>
        <div className='flex flex-col gap-4  justify-center items-center text-center'>
          <h1 className='text-foreground font-bold text-3xl  font-family-WorkSans'>
            Hello, I’m <br />
            Abigail Igberaese
          </h1>
          <p className='text-sm text-secondary font-family-Poppins'>
            I help startups and small businesses grow their online presence and double sales with strategy, creativity, and consistency
          </p>
          <div>
            <Button>Contact Me</Button>
          </div>
        </div>
        <div className=' w-auto mt-4 pb-2 mb-4 flex justify-center'>
          <img src={Images.Profile} className='h-full' alt="" />
        </div>
        <div className='flex flex-row justify-center gap-3 items-center p-0 w-[90vw] h-17'>
          <div className='bg-accent w-[30%] h-full'>
            <h1 className='text-foreground font-semibold text-sm pt-1.5'>+100%</h1>
            <p className='text-secondary text-xs'>Engagement Growth</p>
          </div>
          <div className='bg-accent  w-[30%] h-full'>
            <h1 className='text-foreground font-semibold pt-1.5 text-sm'>+200%</h1>
            <p className='text-secondary text-xs'>Impressions Growth</p>
          </div>
          <div className='bg-accent  w-[30%] h-full'>
            <h1 className='text-foreground font-semibold text-sm pt-1.5'>+6</h1>
            <p className='text-secondary text-xs'>Happy <br />Client</p>
          </div>

        </div>
      </header>
    </>
  )
}

export default Hero