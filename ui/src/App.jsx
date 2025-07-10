// App.jsx
import React from "react";
import Sidebar from "./Sidebar";
import CityMap from "./CityMap";

function App() {
  return (
    <div className="flex h-screen w-screen text-white">
      <Sidebar />
      <CityMap />
    </div>
  );
}

export default App;