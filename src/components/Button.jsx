import React from 'react'

const Button = ({children,className,onClick,...props}) => {
  const classname=`${className} bg-primary text-background font-semibold text-sm w-32 h-10 rounded-sm hover:animate-pulse active:bg-secondary active:animate-pulse transition-all`
  return (
    <button className={` ${classname}`} onClick={()=>onClick} {...props}>
        {children}
    </button>
  )
}

export default Button