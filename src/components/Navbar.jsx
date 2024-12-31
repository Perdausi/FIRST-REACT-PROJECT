import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/react.png'
import burger from '../assets/burger-bar.png'
import close from '../assets/close.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
       
    }

   const linkClass = ({isActive}) => isActive ? "text-indigo-800 text-lg transition text-md bg-white w-24 text-center py-1 rounded hover:bg-white hover:text-indigo-600 transition hover:border-none" : "text-white text-md transition text-lg  w-24 text-center py-1 rounded hover:text-white transition hover:border" 
    return (
        <nav className={`border-b shadows-lg bg-indigo-700 fixed top-0 right-0 w-full`}>
            <div className='flex items-center justify-between gap-5 px-10 py-5'
            > 
                <div className='flex items-center justify-center gap-2'>
                    <img src={logo} className='w-14' alt="" />
                    <span className='text-2xl sm:text-xl font-black text-white italic'> ReactJob.ph</span>
                </div>

                <div className='hidden flex items-center justify-center gap-5 md:flex relative'>
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="jobs" className={linkClass}>Jobs</NavLink>
                    <NavLink to="add-job" className={linkClass}>Add job</NavLink>
                </div>

                {/* this is the button*/}
                <div onClick={toggleMenu} className='absolute right-0 md:hidden px-10'>
                        <button className='rounded-full py-2 px-2 bg-white'>
                            {isOpen ? (<img  className="transition" src={close} alt="" width={'20px'} />) : <img className="transition" src={burger} alt="" width={'20px'} />}
                        </button>
                </div>


                
                {isOpen && (
                    <div className='md:hidden bg-white p-3 rounded shadow:lg flex flex-col md:flex-row absolute gap-6 p-5 right-1 top-20'>
                    <NavLink to="/" className={`${linkClass} text-black`}>Home</NavLink>
                    <NavLink to="jobs" className={`${linkClass} text-black`}>Jobs</NavLink>
                    <NavLink to="add-job" className={`${linkClass}`}>Add job</NavLink>
                </div>
                )}
            </div>

        </nav>   
    )
  }