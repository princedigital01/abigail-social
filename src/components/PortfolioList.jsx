import React, { useEffect } from 'react'
import { values } from '@/constants'
import Button from './Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const PortfolioList = ({ n }) => {
    return (
        <div className='mt-10 mb-10 text-foreground flex flex-col gap-10'>
            <div className="h1">
                my Expriences
            </div>
            <div className='flex flex-col gap-10 items-center justify-center '>

                {values.experiences.slice(0, n).map((work) => (
                    <div className='w-[90%] border-accent border-2 rounded-xl flex justify-center flex-col gap-4 overflow-hidden'>
                        <img src={work.image} alt="" />
                        <div className='flex flex-col gap-5 pb-5 justify-center items-center'>
                            <h2 className='h2'>{work.title}</h2>
                            <p className='text-secondary'>{work.subtitle}</p>
                            <Button white className={"flex flex-row justify-center items-center"}>See Results <ArrowRight/> </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioList