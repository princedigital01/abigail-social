import React from 'react'

const Button = ({children,className,onClick,...props}) => {
  return (
    <button className={` ${className}`} onClick={()=>onClick}>
        {children}
    </button>
  )
}

export default Button