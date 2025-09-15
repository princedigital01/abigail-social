import Bg from '@/components/Bg'
import Card from '@/components/Card'
import Hero from '@/components/Hero'
import Process from '@/components/Process'
import React from 'react'

const Home = () => {
  return (
    <div className='relative -z-10 overflow-hidden'>
      <div className=' flex flex-col items-center'>
        <Hero />
        <Card />
        <Bg />
      </div>
      <Process/>

    </div>
  )
}

export default Home