import React from 'react'
import { MdSunny } from "react-icons/md";
const Outdoor = () => {
  return (
    <div className='bg-lightblue rounded-2xl ml-4 p-4 w-[16rem] h-[15rem] shadow-md mt-10 shadow-slate-800 mr-7'>
      <p className='font-semibold text-xl mb-4 ml-2'>Outdoor🌳</p>

    <div className='flex justify-center items-center pl-4'>
       <div className='w-[10rem] h-[9rem] bg-blue-300 rounded-lg ml-2 shadow-lg shadow-slate-600 '>
            <p className='font-semibold text-lg text-slate-800 ml-2 pt-3'>Weather</p>  
            <div className='flex ml-2 bg-lightblue rounded-xl w-[8rem] mt-3'>
                <p className='text-slate-600 font-medium pl-7 '>  Sunny</p>
              <MdSunny className='bg-blue-200 text-yellow-300 text-3xl '/>
            </div>
            <div className='flex ml-2 bg-lightblue rounded-xl w-[8rem] mt-3'>
                <p className='text-slate-600 font-medium pl-7 '>27.8°C</p>
            </div>
       </div>

       <div className='ml-7'>
            
       </div>
       </div>
    </div>
  )
}

export default Outdoor
