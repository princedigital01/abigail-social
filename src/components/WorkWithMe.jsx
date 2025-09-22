import React from 'react'
import Button from './Button'
import { ArrowRight, Icon } from 'lucide-react'

const WorkWithMe = () => {
  return (
    <div className='bg-secondary-foreground text-background w-full mt-10 py-12 px-1.5 gap-5 flex flex-col justify-center items-center'>
        <h1 className='h2'>Lets discuss your project!</h1>
        <p className='text-sm font-light'>Ready to grow your online precence?  let's create a strategy taliored to your bussiness that attracts, engangs, and converts the right audience</p>
        <Button className={"flex  justify-center items-center gap-1"}>Send a DM <ArrowRight/> </Button>
    </div>
  )
}

export default WorkWithMe