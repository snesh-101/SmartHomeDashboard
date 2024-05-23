import React, { useState, useEffect } from 'react';
import { FaDoorOpen } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return null; // Don't render the sidebar on mobile
  }

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing authentication tokens)
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className={`${open ? "w-96" : "w-0"} bg-blue-200 p-5 pt-8 flex-col h-screen bg-gray-200 overflow-y-auto border border-r-2 border-slate-500 duration-300 sticky top-0`}>
      <h2 
        className="absolute cursor-pointer -right-3 top-9 w-10 text-center" 
        onClick={() => setOpen(!open)}
      >
        {open ? <FaChevronCircleLeft size="24px" /> : <FaChevronCircleRight size="24px" />}
      </h2>
      <div className="flex gap-3 mb-10 ml-5">
        <div>
          <img
            className="rounded-full w-12 h-11 cursor-pointer"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            onClick={toggleProfilePopup}
          />
        </div>
        {open && (
          <div className="flex-col">
            <h4 className="ml-3 text-slate-600 text-xs">Welcome back</h4>
            <h3 className="text-base font-semibold cursor-pointer" onClick={toggleProfilePopup}>
              Alice Fasbender
            </h3>
          </div>
        )}
      </div>
      <ul className="flex-col ml-5">
        <li className="flex items-center font-bold text-lg mb-7 hover:transition-all hover:cursor-pointer hover:drop-shadow-lg hover:bg-blue-300 rounded-full">
          <MdSpaceDashboard className="w-5 h-5 mr-2 mt-1" />
          {open && <Link to={"/home"}>Dashboard</Link>}
        </li>
        <li className="flex items-center font-bold text-lg mb-7 hover:transition-all hover:cursor-pointer hover:drop-shadow-lg hover:bg-blue-300 rounded-full">
          <FaDoorOpen className="w-5 h-5 mr-2 mt-1" />
          {open && <Link to={"/rooms"}>Rooms</Link>}
        </li>
        <li className="flex items-center font-bold text-lg mb-7 hover:transition-all hover:cursor-pointer hover:drop-shadow-lg hover:bg-blue-300 rounded-full">
          <IoNotificationsSharp className="w-5 h-5 mr-2 mt-1" />
          {open && <Link to={"/notifications"}>Notifications</Link>}
        </li>
        <li className="flex items-center font-bold text-lg mb-7 hover:transition-all hover:cursor-pointer hover:drop-shadow-lg hover:bg-blue-300 rounded-full">
          <FaMapMarkerAlt className="w-5 h-5 mr-2 mt-1" />
          {open && <Link to={"/location"}>Location</Link>}
        </li>
      </ul>
      
      {showProfilePopup && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-sm p-4 bg-white rounded-md shadow-lg z-10">
          <h2 className="text-xl font-semibold text-center">Profile</h2>
          <ul className="mt-4 text-center">
            <li><strong>First Name:</strong> Alice</li>
            <li><strong>Last Name:</strong> Fasbender</li>
            <li><strong>Email:</strong> alice121@gmail.com</li>
          </ul>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none w-full"
            onClick={toggleProfilePopup}
          >
            Close
          </button>
          {/* <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none w-full"
            onClick={handleLogout}
          >
            Logout
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
