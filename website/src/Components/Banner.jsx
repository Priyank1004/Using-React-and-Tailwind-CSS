import React from 'react'
import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div className='bg-[#2699fb] w-full py-[50px]'>
            <div className='max-w-[1240px] mx-auto text-center font-bold my-[100px]'>
                <div className='text-xl md:text-3xl md:p-[8px]'>Learn With Us</div>
                <div className='text-white text-5xl md:text-[60px] md:p-[8px]'>Grow with us.</div>
                <div className='text-[20px] md:text-[50px] text-white md:p-[8px]'>
                    Learn <ReactTyped
                         className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                         strings={['Digital Makerting', 'Web Development', 'Ethical Hacking']}
                         typeSpeed={120}
                         backSpeed={140}
                         loop
                    />
                </div>
                <button className='bg-black text-white p-3 rounded'>Get started</button>
            </div>
        </div>
    )
}

export default Banner
