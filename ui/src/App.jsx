import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './index.css';

const civicData = [
  {
    id: 1,
    type: 'Traffic',
    lat: 12.9716,
    lng: 77.5946,
    title: 'Traffic Jam',
    description: 'Heavy congestion near MG Road.',
    time: '5 min ago',
    source: 'BBMP',
  },
  {
    id: 2,
    type: 'Power',
    lat: 12.9352,
    lng: 77.6146,
    title: 'Power Outage',
    description: 'No power in Koramangala since 2 PM.',
    time: '20 min ago',
    source: 'BESCOM',
  },
  {
    id: 3,
    type: 'Event',
    lat: 12.9719,
    lng: 77.6412,
    title: 'Cultural Fest',
    description: 'Live music at Indiranagar today.',
    time: 'Today, 7 PM',
    source: 'Bangalore Events',
  },
  {
    id: 4,
    type: 'Water',
    lat: 12.9250,
    lng: 77.5938,
    title: 'Water Supply Disruption',
    description: 'Water supply interrupted in Jayanagar.',
    time: '10 min ago',
    source: 'BWSSB',
  },
  {
    id: 5,
    type: 'Garbage',
    lat: 12.9489,
    lng: 77.5739,
    title: 'Garbage Pickup Delay',
    description: 'Pickup delayed in Rajajinagar.',
    time: '1 hr ago',
    source: 'BBMP',
  },
  {
    id: 6,
    type: 'Weather',
    lat: 12.9716,
    lng: 77.5946,
    title: 'Heavy Rain Alert',
    description: 'Thunderstorms expected in the evening.',
    time: 'Forecast',
    source: 'IMD',
  },
];

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 12.9716,
  lng: 77.5946,
};

const typeIcons = {
  Traffic: '🚦',
  Power: '💡',
  Event: '🎉',
  Water: '🚰',
  Garbage: '🗑️',
  Weather: '🌧️',
};

export default function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredData =
    filter === 'All' ? civicData : civicData.filter((d) => d.type === filter);

  const allTypes = [
    'All',
    ...Array.from(new Set(civicData.map((d) => d.type))),
  ];

  return (
    <div className="app min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <aside className="sidebar w-full md:w-80 bg-white/80 backdrop-blur-md shadow-lg rounded-b-3xl md:rounded-3xl m-0 md:m-8 p-6 flex flex-col border border-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center gap-2">
          <span role="img" aria-label="dashboard">📊</span> Bengaluru Dashboard
        </h2>
        <div className="filters mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Filter by type:</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          >
            {allTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Live Feed</h3>
        <ul className="space-y-3 overflow-y-auto flex-1 pr-1 custom-scrollbar">
          {filteredData.map((item) => (
            <li
              key={item.id}
              className="p-3 rounded-xl border-l-4 shadow-sm bg-white/90 hover:bg-blue-50 transition-all border-blue-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{typeIcons[item.type]}</span>
                <span className="font-semibold text-blue-800">{item.title}</span>
              </div>
              <div className="text-gray-700 text-sm mb-1">{item.description}</div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{item.type}</span>
                <span>{item.source}</span>
                <span>{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <main className="map-container flex-1 m-0 md:m-8 rounded-3xl overflow-hidden shadow-lg border border-blue-100">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={13}
          >
            {filteredData.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => setSelected(marker)}
                icon={{
                  url:
                    marker.type === 'Traffic'
                      ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                      : marker.type === 'Power'
                      ? 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
                      : marker.type === 'Event'
                      ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                      : marker.type === 'Water'
                      ? 'http://maps.google.com/mapfiles/ms/icons/cyan-dot.png'
                      : marker.type === 'Garbage'
                      ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
                      : 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
                }}
              />
            ))}

            {selected && (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div className="p-2 min-w-[180px]">
                  <h4 className="font-bold text-blue-700 text-base mb-1 flex items-center gap-2">
                    {typeIcons[selected.type]} {selected.title}
                  </h4>
                  <p className="text-gray-700 mb-1 text-sm">{selected.description}</p>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{selected.source}</span>
                    <span>{selected.time}</span>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </main>
    </div>
  );
}

