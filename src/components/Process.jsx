import { Svg, values } from '@/constants'
import React from 'react'

const Process = () => {
  return (
    <div className='text-foreground bg-accent mt-10 pt-10 pb-10 flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>WorK Process <span className='hidden'><img src={Svg.RightArrow} alt="" /></span></h1>
        <div className='flex flex-col gap-5 justify-center items-center'>
            {values.WorkProcess.map((item=>(
                <div key={item.id} className='bg-white w-70 h-70 flex flex-col items-center gap-5 p-5 rounded-2xl'>
                    <div className={`h-20 w-20 ${item.id==1? "text-white bg-primary": "text-primary bg-accent"} flex justify-center items-center rounded-xl`}>
                        <item.icon className="w-[60%] h-[60%] "/>
                    </div>
                    <div>
                        <h1 className='h3 '>{item.id}. {item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                </div>
            )))}

        </div>
    </div>
  )
}

export default Process