import React, { useState } from 'react';

const Level = ({ maxValue = 100 }) => {
  const [fillValue, setFillValue] = useState(47); // State to track the fill value

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPosition = e.clientX - rect.left; // Calculate the mouse position relative to the element
    const percentage = (xPosition / rect.width) * 100; // Calculate the percentage based on mouse position
    setFillValue((percentage * maxValue) / 100); // Update the fill value based on the percentage
  };

  return (
    <div
      className="w-[17rem] h-4 ml-5 mt-3 bg-white border-2 border-slate-500 shadow-md shadow-slate-600 rounded-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="h-full bg-blue-300"
        style={{ width: `${fillValue}%` }}
      ></div>
    </div>
  );
};

export default Level;
