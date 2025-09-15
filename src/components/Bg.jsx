import React from 'react'

const Bg = ({children}) => {
  return (
    <div className=''>
      {children || ""}
      <div className='-z-10 absolute inset-0 left-0  w-[100vw] h-full '>
        <div className='w-full h-full '>
          <div className='w-[40vw] h-[40vw] bg-[#DA4DF1]/40 rounded-full absolute -right-[20%] top-[01%] blur-[10vw]'/>
          <div className='w-[80vw] h-[80vw] bg-[#C4F5E9]/50 rounded-full absolute -right-[15%] top-[15%] blur-[15vw]'/>
          <div className='w-[30vw] h-[30vw] bg-[#FFDFA8]/60 rounded-full absolute  right-[85%] top-[91%] blur-[5vw]'/>

        </div>

      </div>
      </div>
  )
}

export default Bg