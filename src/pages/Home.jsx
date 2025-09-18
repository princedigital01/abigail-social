import Bg from '@/components/Bg'
import Card from '@/components/Card'
import Hero from '@/components/Hero'
import PortfolioList from '@/components/PortfolioList'
import Process from '@/components/Process'
import React from 'react'

const Home = () => {
  return (
    <div className='relative -z-10 overflow-hidden'>
      <div className='relative flex flex-col items-center'>
        <Hero />
        <Card />
        <Bg />
      </div>
      <Process/>
      <PortfolioList/>

    </div>
  )
}

export default Home