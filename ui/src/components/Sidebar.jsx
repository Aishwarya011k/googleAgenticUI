import React from 'react';

export default function Sidebar({ userLocation, onChangeRegion }) {
  return (
    <div className="bg-white p-4 h-full shadow-md">
      <h2 className="text-xl font-bold mb-4">City Pulse</h2>
      <div>
        <p><strong>Your Area:</strong> {userLocation.name}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => onChangeRegion("Koramangala")}
        >
          Switch to Koramangala
        </button>
      </div>
    </div>
  );
}
