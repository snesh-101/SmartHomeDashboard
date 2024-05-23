import React from "react";
import { Avatar } from "@material-tailwind/react";

const Occupants = () => {
  return (
    <div className="bg-lightblue rounded-lg  ml-4 mt-10 w-[25rem] h-[10rem] shadow-slate-700 shadow-md ">
      <p className="font-semibold text-xl pt-5 ml-4">Occupants</p>
      <div className="flex flex-wrap ml-4 mt-4">
        <div className="flex-col">
          <Avatar
            className="w-11 h-11 mr-4 ml-3 "
            src="https://docs.material-tailwind.com/img/face-1.jpg"
            alt="avatar"
          />
          <p className="flex justify-center items-center">Alice</p>
        </div>
        <div className="flex-col">
          <Avatar
            className="w-11 h-11 mr-4 ml-3 "
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
          <p className="flex justify-center items-center">Jhon</p>
        </div>
        <div className="flex-col">
          <Avatar
            className="w-11 h-11 mr-4 ml-3 "
            src="https://docs.material-tailwind.com/img/face-3.jpg"
            alt="avatar"
          />
          <p className="flex justify-center items-center">Stew</p>
        </div>
        <div className="flex-col">
          <Avatar
            className="w-11 h-11 mr-4 ml-3 "
            src="https://docs.material-tailwind.com/img/face-4.jpg"
            alt="avatar"
          />
          <p className="flex justify-center items-center">Louis</p>
        </div>
        <div className="flex-col">
          <Avatar
            className="w-11 h-11 mr-4 ml-3 "
            src="https://docs.material-tailwind.com/img/face-5.jpg"
            alt="avatar"
          />
          <p className="flex justify-center items-center">Peterica</p>
        </div>
      </div>
    </div>
  );
};

export default Occupants;
