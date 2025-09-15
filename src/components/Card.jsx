import React from 'react'
import Button from './Button'
import { Images } from '@/constants'

const Card = () => {
  return (
    <div className='w-[95%] flex flex-col justify-center items-center gap-4 shadow-xl  text-foreground mt-10 mb-10 border-secondary-foreground border-1 rounded-3xl p-4 bg-background'>
      <img src={Images.Profile2} className='w-[50vw] rounded-2xl' />
      <div className=' flex flex-col gap-4'>
        <h1 className=' font-semibold text-2xl'>I am a Social Media Marketing Strategist</h1>
        <p className='text-secondary '>With a B.Sc. in Marketing and certifications in Social Media Management & SEO, I specialize in helping brands build visibility, attract the right audience, and drive real business growth.</p>
        <div>
          <Button>Read More...</Button>
        </div>
      </div>
    </div>
  )
}

export default Card