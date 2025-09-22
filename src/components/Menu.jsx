import {useState} from 'react'
import Button from './Button';
import { values } from '@/constants';


const Menu = () => {

  const [open, setOpen] = useState(false);

const toggleOpen=()=>{
  
  setOpen(!open);
}

  return (
    <div className='relavive'>
      <div>
        <button className="w-12 h-12 relative z-20" onClick={()=>toggleOpen()}>
          <div className="transition-all duration-300 ease-out w-full h-full flex flex-col gap-1 justify-center items-center">
            <div className={`transition-all duration-300 ease-out w-8 h-1 rounded-full bg-primary ${open ? "rotate-45 absolute w-6":""}`}></div>
            <div className={`transition-all duration-300 ease-out w-8 h-1 rounded-full bg-primary ${open ? "opacity-0":""}`}></div>
            <div className={`transition-all duration-300 ease-out w-8 h-1 rounded-full bg-primary ${open ? "-rotate-45 absolute w-6":""}`}></div>
          </div>
        </button>
      </div>
      <div className={`transition-all duration-500 ease-out absolute w-[100vw] h-[100vh] top-0 z-10 flex flex-col gap-1 pt-10 items-center bg-background ${open? "left-0 opacity-100":"left-full opacity-0"}`}>

        {values.NavLinks.map((link,i)=>(
          <a key={i} href={link.href} className='w-full h-12 font-family-Poppins font-semibold text-foreground'>{link.title}</a>
        ))}
      </div>
    </div>
  )
}

export default Menu