import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '100%' };

export default function MapComponent({ locations, center }) {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {locations.map((loc, idx) => (
          <Marker
            key={idx}
            position={{ lat: loc.lat, lng: loc.lng }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
