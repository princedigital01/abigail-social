import React from 'react'

const SmallCard = ({item, children,}) => {
  return (
    <div className='overflow-hidden w-[90%] bg-background h-30 rounded-xl flex  gap-5'>

        <div className={`h-full w-1 ${item.id==1 ?'bg-primary' : 'bg-background'} shadow-2xl shadow-foreground`}></div>
        <div className='flex flex-col justify-start items-start pl-2 pt-3 gap-3'>
            <h2 className='font-semibold text-lg'>{item.title}</h2>
            <p className='font-light text-sm'>{item.description}</p>
        </div>
    </div>
  )
}

export default SmallCard