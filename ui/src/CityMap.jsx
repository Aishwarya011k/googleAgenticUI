import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css"; // For custom styles

// White marker icon
const whiteIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30],
  className: "white-marker",
});

const locations = [
  {
    title: "🎉 Cultural Fest",
    desc: "Live music and food stalls at Indiranagar Grounds.",
    type: "Event",
    org: "Bangalore Events",
    time: "Today, 7 PM",
    coords: [12.9719, 77.6412],
  },
  {
    title: "🚱 Water Supply Disruption",
    desc: "Water supply interrupted in Jayanagar.",
    type: "Water",
    org: "BWSSB",
    time: "10 min ago",
    coords: [12.925, 77.5938],
  },
  {
    title: "🗑️ Garbage Pickup Delay",
    desc: "Pickup delayed in Rajajinagar.",
    type: "Garbage",
    org: "BBMP",
    time: "1 hr ago",
    coords: [12.9911, 77.5562],
  },
  {
    title: "🌧️ Heavy Rain Alert",
    desc: "Thunderstorms expected across South Bengaluru.",
    type: "Weather",
    org: "IMD",
    time: "2 hr ago",
    coords: [12.9063, 77.5855],
  },
  {
    title: "🚌 Bus Route Changed",
    desc: "BMTC Route 314 temporarily rerouted via MG Road.",
    type: "Transport",
    org: "BMTC",
    time: "30 min ago",
    coords: [12.9716, 77.5946],
  },
  {
    title: "💡 Power Outage",
    desc: "Koramangala Block 5 without power since noon.",
    type: "Electricity",
    org: "BESCOM",
    time: "1 hr ago",
    coords: [12.9352, 77.6146],
  },
  {
    title: "🦠 Dengue Advisory",
    desc: "High mosquito activity in BTM Layout — use repellents.",
    type: "Health",
    org: "BBMP Health",
    time: "Today, 9 AM",
    coords: [12.9166, 77.6101],
  },
  {
    title: "🚧 Road Work",
    desc: "Whitefield Main Road closed till Sunday.",
    type: "Infrastructure",
    org: "BBMP",
    time: "3 hr ago",
    coords: [12.9698, 77.7499],
  },
  {
    title: "🔥 Gas Leak",
    desc: "Minor gas leak near HSR Layout, under control.",
    type: "Emergency",
    org: "Bangalore Gas",
    time: "20 min ago",
    coords: [12.9121, 77.6446],
  },
  {
    title: "📡 Network Outage",
    desc: "Fiber optic cut affecting broadband in Malleshwaram.",
    type: "Telecom",
    org: "Airtel",
    time: "45 min ago",
    coords: [13.0052, 77.5691],
  },
];

const MapView = () => {
  const [isDark, setIsDark] = useState(true);

  const darkTile =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  const lightTile =
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <div className={`w-full h-screen relative ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Toggle Button */}
      <button
        className="absolute top-4 right-4 z-[1000] px-4 py-2 text-sm font-semibold rounded-md shadow-md
        transition-all duration-300
        bg-gray-800 text-white hover:bg-gray-700
        dark:bg-white dark:text-black"
        onClick={() => setIsDark(!isDark)}
      >
        Switch to {isDark ? "Light" : "Dark"} Theme
      </button>

      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          url={isDark ? darkTile : lightTile}
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Markers */}
        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.coords} icon={whiteIcon}>
            <Popup>
              <div className="text-sm">
                <strong>{loc.title}</strong><br />
                <span>{loc.desc}</span><br />
                <em>{loc.org}</em><br />
                <span className="text-xs text-gray-500">{loc.time}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
