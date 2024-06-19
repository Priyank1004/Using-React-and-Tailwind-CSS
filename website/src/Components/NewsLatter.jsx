import React from 'react'

const NewsLatter = () => {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2'>
            <h1 className='text-white text-[20px] md:text-[40px] font-bold'>Want to learn latest I.T Skills?</h1>
            <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
        </div>
        <div className='m-2'>
            <input type="text" className='mr-[4px] mb-2 p-3 rounded text-slate-300' placeholder='Enter Your Email'/>
            <button className='bg-black text-white p-3 rounded'>Notify</button>
            <br/>
            <p className='text-white'>We care bout the protection of your data.<br/> Read our Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter

