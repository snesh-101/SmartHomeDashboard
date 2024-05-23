// import React from "react";
// import Sidebar from "trial4\src\components\Sidebar.jsx";
import Sidebar from "../Sidebar";
import { BsBellFill } from "react-icons/bs";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      icon: "door_open",
      title: "Front Door Opened",
      time: "Just Now",
    },
    {
      id: 2,
      icon: "motion_detected",
      title: "Motion Detected in Living Room",
      time: "5 minutes ago",
    },
    {
      id: 3,
      icon: "thermostat",
      title: "Thermostat Temperature Changed",
      time: "1 hour ago",
      content: "New temperature: 72°F",
    },
    {
      id: 4,
      icon: "lightbulb",
      title: "Living Room Light Turned On",
      time: "2 hours ago",
    },
    {
      id: 5,
      icon: "window_open",
      title: "Bedroom Window Opened",
      time: "3 hours ago",
    },
    {
      id: 6,
      icon: "alarm",
      title: "Alarm Set for 7:00 AM",
      time: "4 hours ago",
    },
  ];

  return (
    <div className="bg-blue-300 flex">
      <Sidebar></Sidebar>
      <div className="flex flex-col w-full overflow-y-auto px-4 py-2">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start border-b border-gray-200 py-4 hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="mr-4">
              {notification.icon ? (
                <BsBellFill size={24} className="text-blue-500" />
              ) : null}
            </span>
            <div className="flex-grow">
              <h3 className="font-medium text-lg">{notification.title}</h3>
              {notification.content && (
                <p className="text-gray-600 mt-1">{notification.content}</p>
              )}
            </div>
            <span className="text-gray-500 text-sm self-end">
              {notification.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
