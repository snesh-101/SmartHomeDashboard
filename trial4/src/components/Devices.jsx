import React from 'react';
import Card_device from "./Card_device";
import Info_device from "./Info_device";
import { BsLaptop } from 'react-icons/bs';
import { MdOutlineSpeaker } from "react-icons/md";
import { LuRouter } from "react-icons/lu";
import { CiWifiOn } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import Occupants from "./Occupants";
import Appliances from "./Appliances";
import Outdoor from "./Outdoor";
import Temperature from "./Temperature";

const Devices = () => {
  return (
    <div className="ml-10 bg-blue-300 md:h-full flex flex-col lg:flex-row">
      <div className="flex flex-col">
        <h1 className="pt-5 ml-4 font-semibold text-2xl">My Devices</h1>
        {/* Container div */}
        <div className="grid gap-4 grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-4">
          <Card_device icon={<BsLaptop className="w-7 h-7" />} devname="Smart TV" usage="0" power="3" isactive={false} />
          <Card_device icon={<MdOutlineSpeaker className="w-7 h-7" />} devname="Speaker" usage="0" power="4" isactive={false} />
          <Card_device icon={<LuRouter className="w-7 h-7" />} devname="Router" usage="9" power="1" isactive={true} />
          <Card_device icon={<CiWifiOn className="w-7 h-7" />} devname="Wifi" usage="6" power="3" isactive={true} />
          <Card_device icon={<TbAirConditioning className="w-7 h-7" />} devname="AC" usage="2" power="5" isactive={true} />
          <Card_device icon={<CgSmartHomeRefrigerator className="w-7 h-7" />} devname="Refrigerator" usage="0" power="4" isactive={false} />
        </div>
        <div className="flex  sm:flex-row flex-wrap mb-7">
          <Info_device />
          <Appliances />
          <Outdoor />
          <Occupants />
        </div>
        {/* <div className="flex flex-col sm:flex-row">
        <Outdoor />
          <Occupants />
        </div> */}
      </div>
      <div className='ml-10 mt-4 lg:mt-0'>
        <Temperature />
      </div>
    </div>
  );
}

export default Devices;
