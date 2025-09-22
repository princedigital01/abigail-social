import React from 'react'

const Button = ({children,white, className,onClick,...props}) => {
  const classname=`${className} ${white? "bg-background text-primary border-1 border-primary": "bg-primary text-background"} font-semibold text-sm w-32 h-10 rounded-sm hover:animate-pulse active:bg-secondary active:animate-pulse transition-all`
  return (
    <button className={` ${classname}`} onClick={()=>onClick} {...props}>
        {children}
    </button>
  )
}

export default Button