import React, { useEffect } from 'react'
import { values } from '@/constants'

const PortfolioList = ({ n }) => {
    return (
        <div className='mt-10 mb-10 text-foreground'>
            <div className='flex flex-col gap-10 items-center justify-center '>
                {values.experiences.slice(0, n).map((work) => (
                    <div className='w-[90%] border-accent border-2 rounded-xl flex justify-center flex-col gap-4 overflow-hidden'>
                        <img src={work.image} alt="" />
                        <div className='space-y-4 pb-5'>
                            <h2 className='h2'>{work.title}</h2>
                            <p className='text-secondary'>{work.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioList