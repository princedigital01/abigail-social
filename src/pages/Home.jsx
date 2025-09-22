import Bg from '@/components/Bg'
import Card from '@/components/Card'
import ContactCard from '@/components/ContactCard'
import Hero from '@/components/Hero'
import PortfolioList from '@/components/PortfolioList'
import Process from '@/components/Process'
import Testimonial from '@/components/Testimonial'
import WhatIDo from '@/components/WhatIDo'
import WorkWithMe from '@/components/WorkWithMe'
import React from 'react'

const Home = () => {
  return (
    <div className='relative  overflow-hidden'>
      <div className='relative flex flex-col items-center'>
        <Hero />
        <Card />
        <Bg />
      </div>
      <Process/>
      <PortfolioList/>
      <WorkWithMe/>
      <WhatIDo/>
      <div className='relative flex flex-col items-center'>
      <Testimonial/>
      <ContactCard/>
      <Bg/>
      </div>

    </div>
  )
}

export default Home