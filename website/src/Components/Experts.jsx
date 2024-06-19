import React from 'react';
import laptop from '../assest/laptop.jpg'

const Experts = () => {
    return (
        <div className='max-w-[1240px] p-[8px] mx-auto my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={laptop} className='inline' alt="" />
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FORM EXPERTS</h1>
                <p className='my-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio repellendus, dignissimos in tenetur repellat quod suscipit neque expedita adipisci, voluptatum amet assumenda inventore quo sapiente laborum obcaecati unde accusantium!</p>
                <button className='bg-black text-white p-3 rounded w-[30%]'>Get started</button>
            </div>
        </div>
    )
}

export default Experts
