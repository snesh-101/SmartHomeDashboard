
import React, { useState, useEffect } from 'react';
import Barchart from './Barchart';

const Info_device = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // State to hold the current date

  // Function to update the current date
  const updateDate = () => {
    setCurrentDate(new Date());
  };
  // Use useEffect to set up a timer to update the date every day
  useEffect(() => {
    const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000); // Update every 24 hours (86400000 milliseconds)
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className='bg-lightblue rounded-2xl shadow-md mt-3 shadow-slate-800 ml-4 mr-10 p-4 w-[25rem]'>
      <div className='flex'>
         <p className='font-semibold text-lg'>Usage Status </p>
         <p className='font-medium  pl-20 ml-10 text-slate-500'>Date: {currentDate.toLocaleDateString()}</p>
      </div>
      <Barchart/>
    </div>
  );
};

export default Info_device;
