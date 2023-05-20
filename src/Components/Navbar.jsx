import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import logo from '../images/Logo.png'

const Navber = () => {
    const [open, setOpen] = useState(false);
   
    return (
        <div className='mx-4 md:max-w-[1024px] md:mx-auto'>
            {/* Desktop version */}
            <div className='md:flex justify-between items-center hidden  md:mt-6'>
            
                <div className=''>
                    <img className='w-16 h-16' src={logo} alt="" />
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-8 text-white'>
                        <li><a className='font-Roboto' href="#home">Home</a></li>
                        <li><a className='font-Roboto' href="#aboutus">About Us</a></li>
                        <li><a className='font-Roboto' href="#gellery">Gallery</a></li>
                        <li><a className='font-Roboto' href="#roadmap">Roadmap</a></li>
                    </ul>
                </div>
            </div>
            {/* Mobile Version */}
            <div className='flex justify-between items-center relative'>
                <div className='w-24 mt-2 md:hidden'>
                    <img className='w-16 h-16' src={logo} alt="" />
                </div>

                <div className='flex items-center gap-5 md:block'>
                {/* --- Menu --- */}
                <div>
                   <div onClick={()=> setOpen(!open)} className='md:hidden'>
                    {
                        open ? <MdClose className='text-white w-6 h-6'></MdClose> : <HiMenu className='text-white w-6 h-6'></HiMenu>
                    }
                   </div>
                
          
                    <ul className={`nav flex flex-col gap-5 justify-center items-center md:hidden md:pb-0 pb-6 absolute md:static md:z-auto z-50 right-0 w-2/3 py-5 md:py-0 md:w-auto rounded-md shadow-md  mt-8 md:mt-0 text-white bg-[#78b0dd] ${open ? 'top-30' : 'top-[-600px]'}`}>
                        
                        <li><a className='font-Roboto' href="#home">Home</a></li>
                        <li><a className='font-Roboto' href="#aboutus">About Us</a></li>
                        <li><a className='font-Roboto' href="#gellery">Gellery</a></li>
                        <li><a className='font-Roboto' href="#roadmap">Roadmap</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;