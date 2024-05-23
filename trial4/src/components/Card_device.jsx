import React, { useState } from 'react';

const Card_device = ({ icon, devname, usage, power, isactive }) => {
  const [isSelected, setIsSelected] = useState(isactive);

  return (
    <div className="bg-lightblue rounded-2xl shadow-md shadow-slate-800 m-4 p-4 hover:cursor-pointer md:w-[13.6rem] sm:w-64 w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="w-10 h-10">{icon}</div>
        <div
          onClick={() => setIsSelected(!isSelected)}
          className={`flex h-5 w-10 rounded-full transition-all duration-300 shadow-slate-500 shadow-sm ${isSelected ? 'bg-blue-600' : 'bg-slate-500'}`}
        >
          <span className={`h-5 w-5 rounded-full transition-all duration-300 ${isSelected ? 'bg-white transform translate-x-5' : 'bg-white'}`}></span>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-xl mb-1">{devname}</h1>
        <div className="flex justify-between items-center text-xs text-slate-500">
          <p>Active for {usage} hours</p>
          <p className="text-blue-500 text-sm">{power}Kwh</p>
        </div>
        <h2 className="text-right font-medium text-slate-500">Power</h2>
      </div>
    </div>
  );
};

export default Card_device;
