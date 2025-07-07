import React, { useState } from 'react';
import MapComponent from './components/MapComponent';


const regions = {
  koramangala: {
    name: "Koramangala",
    center: { lat: 12.9279, lng: 77.6271 },
    locations: [
      { lat: 12.9279, lng: 77.6271, name: "Koramangala", population: "120,000" },
    ],
  },
  hsr: {
    name: "HSR Layout",
    center: { lat: 12.9352, lng: 77.6140 },
    locations: [
      { lat: 12.9352, lng: 77.6140, name: "HSR Layout", population: "80,000" },
    ],
  },
};

function App() {
  const [regionKey, setRegionKey] = useState('koramangala');
  const region = regions[regionKey];

  return (
    <div className="flex h-screen">
      <div className="w-64">
        <Sidebar
          userLocation={region}
          onChangeRegion={(key) => setRegionKey(key.toLowerCase())}
        />
      </div>
      <div className="flex-1">
        <MapComponent locations={region.locations} center={region.center} />
      </div>
    </div>
  );
}

export default App;

