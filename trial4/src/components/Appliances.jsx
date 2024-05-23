import React, { useState } from 'react';

const Appliances = () => {
  const [appliances, setAppliances] = useState([
    { name: 'CCTV Camera', isSelected: true },
    { name: 'Room Heater', isSelected: false },
    { name: 'Stereo System', isSelected: true },
    { name: 'Ceiling Lights', isSelected: false },
    { name: 'Play Station 4', isSelected: false },
    { name: 'Hall Spotlights', isSelected: true },
  ]);

  const handleToggle = (index) => {
    const updatedAppliances = [...appliances];
    updatedAppliances[index].isSelected = !updatedAppliances[index].isSelected;
    setAppliances(updatedAppliances);
  };

  return (
    <div className='bg-lightblue rounded-2xl ml-4 p-4 w-[17.2rem] shadow-md mt-3 shadow-slate-800'>
      <p className='font-semibold text-lg mb-4 ml-2'>Appliances</p>
      <div className='text-slate-600 font-medium'>
        {appliances.map((appliance, index) => (
          <div key={index} className='flex items-center mb-4'>
            <p className='mr-14 ml-2'>{appliance.name}</p>
            <div
              onClick={() => handleToggle(index)}
              className={`h-4 w-10 relative cursor-pointer transition-all duration-300 ${
                appliance.isSelected ? 'bg-blue-600 shadow-xl' : 'bg-slate-500 shadow-md'
              } rounded-full`}
            >
              <div
                className={`absolute h-4 w-5 bg-white rounded-full transition-all duration-300 ${
                  appliance.isSelected ? 'right-0' : 'left-0'
                }`}
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appliances;
