import { values } from '@/constants'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Testimonial = () => {
    const [car, setCar] = useState(1)
    const [Timer, setTimer] = useState(()=>{})


    const ToggleCarForward = () => {
        setCar(car +1);
        console.log(car)
    }
     const ToggleCarBackward = () => {
        setCar(car -1);
        console.log(car)
    }

    useEffect(()=>{
         if (car > values.Testimonies.length) {
            setCar(1)
        }
        if (car < 1) {
            setCar(values.Testimonies.length)
        }
    },[car])

    



    return (
        <div className='py-10 text-foreground gap-16 flex-col flex'>
            <h1 className='h2 text-secondary-foreground'>Happy Clients</h1>
            <div className='flex-row justify-center items-center flex'>
                {values.CompanyLogo.map(logo => (
                    <img
                        src={logo.image}
                        className='w-[30%]'
                    />
                ))}
            </div>
            <div className='flex flex-col gap-12 justify-center items-center'>
                <h2 className='h2'>Testimonial</h2>
                <div className=' items-center w-[90%] overflow-hidden'>
                    <div className={`transition-all duration-500 flex flex-row -translate-x-[${(((100/car)-100)*-1)+(((100/car)-100)*-1)}%]`}>
                        {values.Testimonies.map(item => (
                            <div className='w-full space-y-3 flex-none'>
                                <p className='font-semibold italic text-sm text-secondary'>{item.description}</p>
                                <div className='space-y-2'>
                                    <h3 className='h3 text-sm'>{item.client}</h3>
                                    <p className='font-light'>{item.post}, <span>{item.company}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button className={'w-auto text-foreground'} onClick={()=>ToggleCarBackward()} ><ArrowLeft /></button>
                    <div className='flex flex-row gap-0.5'>
                        {values.Testimonies.map((item, i) => (
                            <div className={`w-2 h-2 rounded-full ${i == car - 1 ? "bg-primary w-5" : "bg-secondary"} transition-all duration-150`} />
                        ))}
                    </div>
                    <button className={'w-auto text-foreground'} onClick={()=>ToggleCarForward()} ><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial