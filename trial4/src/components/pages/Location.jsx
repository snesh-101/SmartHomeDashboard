import React from "react";
import Sidebar from "../Sidebar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Location = () => {
  const rajpuraCoords = [30.73827, 76.765144]; // Coordinates of Rajpura, Punjab, India

  return (
    <div className="bg-blue-300 flex">
      <Sidebar></Sidebar>
      
      <MapContainer
        center={rajpuraCoords}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "90vh", width: "80%" }}
        className=" mt-10 ml-2"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={rajpuraCoords}>
          <Popup>Currently Monitoring</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
