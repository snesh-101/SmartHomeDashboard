import React, { useState } from 'react';
import Level from './Level';
import { WiHumidity } from "react-icons/wi";
import Airquality from './Airquality';
const Temperature = () => {
  const [activeMode, setActiveMode] = useState('Cooling'); // State to track the active mode

  const handleModeChange = (mode) => {
    setActiveMode(mode); // Update the active mode when a button is clicked
  };
  return (
    <div className='h-screen bg-blue-300 '>
    <div className='bg-lightblue rounded-2xl w-[21rem] -ml-5 mr-14 mt-7 shadow-md  shadow-slate-800'>
      <p className='p-5 font-semibold text-2xl'>Temperature</p>

      <div className='ml-14 mt-7 relative'>
        <div className='bg-gray w-52 h-52 rounded-full relative shadow-md shadow-slate-700 border-double border-slate-600 border-4'>
        
          <style>
            {`
              @keyframes rotateBorder {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
          <div
            className='bg-blue-300 w-44 h-44  rounded-full border-slate-100 border-4  mt-3 ml-3  transform -translate-x-1/2 -translate-y-1/2'
            style={{
              animation: 'rotateBorder 5s linear infinite', 
            }}
          >
            <p className='text-slate-100 text-3xl font-bold flex items-center justify-center mt-16'>
            {activeMode === 'Heating' ? '27°C' : activeMode==='Cooling'?'19°C' : '21°C' }
            </p>
            <p className='flex items-center justify-center text-lg text-slate-600'>  {activeMode}</p>
            <p className='flex items-center justify-center text-xl'> {activeMode === 'Cooling' ? '❄️' : activeMode === 'Heating' ? '☀️' : '🍃'}</p>
          </div>
        </div>
      </div>
        
       <div className='flex mt-10'>
            <p onClick={() => handleModeChange('Cooling')} className={`ml-2 font-medium text-lg bg-blue-300 rounded-xl w-[6rem] h-10 flex justify-center items-center border-1 border-slate-500 shadow-sm shadow-slate-600 cursor-pointer ${ activeMode === 'Cooling' ? 'bg-blue-300 text-slate-100 border-blue-400' : ' bg-gray'}`}>Cooling❄️</p>
            <p onClick={() => handleModeChange('Heating')} className={`ml-4 font-medium text-lg  rounded-xl w-[6rem] h-10 flex justify-center items-center border-1 border-slate-500 shadow-sm shadow-slate-600 cursor-pointer ${ activeMode === 'Heating' ? 'bg-blue-300 text-slate-100 border-blue-400' : ' bg-gray'}`}>Heating☀️  </p>
            <p onClick={() => handleModeChange('Drying')} className={`ml-4 font-medium text-lg rounded-xl w-[6rem] h-10 flex justify-center items-center border-1 border-slate-500 shadow-sm shadow-slate-600 cursor-pointer ${ activeMode === 'Drying' ? 'bg-blue-300 text-slate-100 border-blue-400' : ' bg-gray'}`}>Drying🍃</p>
       </div>
       <div> 
        <p className='font-semibold text-xl ml-5  pt-10'>Humidity     <WiHumidity  className=' -ml-3 inline w-11 h-7 mb-1 '/></p>
        <Level ></Level>
        <Airquality/>
       </div>
      
    </div>
    </div>
  );
};

export default Temperature;
