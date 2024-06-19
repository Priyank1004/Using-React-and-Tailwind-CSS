import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
    // 2699fb
    <div className='bg-[#2699fb] p-4'> 
        <div className='max-w-[1240px] py-[12px] flex justify-between items-center mx-auto'>
            <div className='text-3xl font-bold'>
                PriyankPatel
            </div>
            {
                toggle ? 
                <IoMdClose className='text-white text-2xl md:hidden block'  onClick={() => setToggle(!toggle)}/>
                :<IoMenu className='text-white text-2xl md:hidden block'  onClick={() => setToggle(!toggle)}/>
            }
            
            
            <ul className='hidden md:flex text-white gap-10 '>
                <li>Home</li>
                <li>Compnay</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contect</li>
            </ul>
            {/* Responcive Menu */}
            <ul className={`duration-300 md:hidden block w-full h-screen text-white fixed bg-black top-[92px] ${toggle? 'left-[0px]':'left-[-100%]'} `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Compnay</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contect</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Header;
