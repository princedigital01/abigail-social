import { Images,Svg, values } from "@/constants"
import Menu from "./Menu"
import Button from "./Button"

import { useState } from "react"
import { useLocation} from "react-router-dom"

const Header = () => {
  const currentPage=useLocation().pathname;

  console.log(currentPage)

  return (
    <>
    <div className='fixed flex-col w-full h-14 top-0 left-0 bg-white z-10'>
      <div className="absolute w-[100vw] bg-amber-600 text-forground text-center bottom-0"> UNDER CONSTRUCTION</div>
      <div className='desktop hidden md:flex justify-around'>
        <div className="flex flex-row justify-start items-center gap-1 w-[30%] pl-4 z-20">
          <img 
            src={Svg.Icon} 
            alt="logo"
            className="h-[50%]" 
          />
          <span className="font-family-Poppins font-semibold text-foreground ">Abigail</span>
        </div>
        <div className="flex flex-row gap-8">
          {values.NavLinks.map((link,i)=>(
            <a key={i} href={link.href} className={`font-semibold ${currentPage==link.href?"text-primary":"text-foreground"}`}>{link.title}</a>
          ))}
        </div>
        <div className="">
          <Button>Contact Me</Button>
        </div>
      </div>
      <div className='mobile flex md:hidden flex-row '>
        <div className="flex flex-row justify-start items-center gap-1 w-[50%] pl-4 z-20">
          <img 
            src={Svg.Icon} 
            alt="logo"
            className="h-[50%]" 
          />
          <span className="font-family-Poppins font-semibold text-foreground ">Abigail</span>
        </div>
        <div className="flex justify-end w-[50%] pr-4">
          <Menu/>
        </div>
      </div>
      
    </div>
    <div className="mb-12"></div>
    </>
  )
}

export default Header