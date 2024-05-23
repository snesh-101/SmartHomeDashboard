import React from 'react';

const Airquality = () => {
  
  const airQuality = Math.random() > 0.5 ? 'Good' : 'Fair';
  const filterStatus = Math.random() > 0.5 ? 'Normal' : 'Replace Soon';
  const airflowRate = Math.floor(Math.random() * 100 + 50); 
  const efficiency = Math.floor(Math.random() * 50 + 50); 
  const noiseLevel = Math.floor(Math.random() * 30 + 30); 
  const powerConsumption = Math.floor(Math.random() * 50 + 50); 

  return (
    <div className="bg-blue-300 rounded-lg shadow-md p-4 m-7">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Air Purifier Status</h2>
        <div className={`rounded-full py-1 px-3 text-sm font-semibold ${airQuality === 'Good' ? 'bg-blue-400 text-white' : 'bg-blue-400 text-white'}`}>
          {airQuality}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-semibold">Filter Status</p>
        <p className="text-sm ">{filterStatus}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-semibold">Airflow Rate (CFM)</p>
        <p className="text-sm font-semibold">{airflowRate} CFM</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-semibold">Particulate Removal Efficiency</p>
        <p className="text-sm font-semibold">{efficiency}%</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-semibold">Noise Level</p>
        <p className="text-sm font-semibold">{noiseLevel} dB</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-semibold">Power Consumption</p>
        <p className="text-sm font-semibold">{powerConsumption} watts</p>
      </div>
     
    </div>
  );
};

export default Airquality;
