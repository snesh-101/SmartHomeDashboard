import React from 'react'
import Sidebar from "../Sidebar";
const Rooms = () => {
  return (
    <div className="bg-blue-300 flex">
      <Sidebar></Sidebar>
     
      <div className='flex-col '>
        <h1 className='pt-7 pl-20 font-bold text-2xl'>Rooms</h1>
      <div className='pt-7 pl-20 flex  '>
        <div className=' flex-col'>
      <img className=' w-[30rem] h-[25rem]  shadow-lg shadow-slate-600 rounded-lg  mr-20' src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="cant" />
      <p className='font-semibold text-lg flex justify-center mr-10 mt-2'>Living Room</p>
      </div>
      <div className=' flex-col'>
      <img className=' w-[30rem] h-[25rem]  rounded-lg shadow-lg shadow-slate-600   mr-20' src="https://images.unsplash.com/photo-1595526051245-4506e0005bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="cant" />
      <p className='font-semibold text-lg flex justify-center mr-10 mt-2'>Bed Room</p>
      </div>
      </div>

      <div className='pt-7 pl-20 flex pb-7 '>
        <div className=' flex-col'>
      <img className=' w-[30rem] h-[25rem]  rounded-lg shadow-lg shadow-slate-600  mr-20' src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cant" />
      <p className='font-semibold text-lg flex justify-center mr-10 mt-2'>Kitchen</p>
      </div>
      <div className=' flex-col'>
      <img className=' w-[30rem] h-[25rem]  rounded-lg shadow-lg shadow-slate-600   mr-20' src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="cant" />
      <p className='font-semibold text-lg flex justify-center mr-10 mt-2'>Drawing Room</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Rooms
