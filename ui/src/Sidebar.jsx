import React from "react";

const liveFeed = [
  {
    title: "🎉 Cultural Fest",
    desc: "Live music at Indiranagar today.",
    type: "Event",
    org: "Bangalore Events",
    time: "Today, 7 PM",
  },
  {
    title: "🚱 Water Supply Disruption",
    desc: "Water supply interrupted in Jayanagar.",
    type: "Water",
    org: "BWSSB",
    time: "10 min ago",
  },
  {
    title: "🗑️ Garbage Pickup Delay",
    desc: "Pickup delayed in Rajajinagar.",
    type: "Garbage",
    org: "BBMP",
    time: "1 hr ago",
  },
  {
    title: "🌧️ Heavy Rain Alert",
    desc: "Thunderstorms expected in the evening.",
    type: "Weather",
    org: "IMD",
    time: "2 hr ago",
  },
  {
    title: "🚌 Bus Route Changed",
    desc: "BMTC Route 314 temporarily rerouted via MG Road.",
    type: "Transport",
    org: "BMTC",
    time: "30 min ago",
  },
  {
    title: "💡 Power Outage",
    desc: "Power outage reported in Koramangala Block 5.",
    type: "Electricity",
    org: "BESCOM",
    time: "1 hr ago",
  },
  {
    title: "🦠 Dengue Advisory",
    desc: "High mosquito activity in BTM Layout — use repellents.",
    type: "Health",
    org: "BBMP Health",
    time: "Today, 9 AM",
  },
  {
    title: "🚧 Road Work",
    desc: "Whitefield Main Road closed for maintenance till Sunday.",
    type: "Infrastructure",
    org: "BBMP",
    time: "3 hr ago",
  },
  {
    title: "📢 Civic Meet",
    desc: "Townhall meeting on solid waste this Saturday.",
    type: "Event",
    org: "Citizen Council",
    time: "Sat, 5 PM",
  },
  {
    title: "🌡️ Heatwave Warning",
    desc: "Temperatures to touch 38°C in afternoon hours.",
    type: "Weather",
    org: "IMD",
    time: "Today, 1 PM",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#121212] text-white w-full md:w-1/3 lg:w-1/4 p-5 h-screen flex flex-col shadow-lg border-r border-gray-800">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-xl">
          <img src="/icon.png" alt="icon" className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold tracking-wide">CityMind</h2>
      </div>

      {/* Filter */}
      <div className="mb-5">
        <label className="block text-sm text-gray-400 mb-1">Filter by type:</label>
        <select className="bg-[#1f1f1f] text-white text-sm px-3 py-2 rounded w-full border border-gray-600 focus:outline-none">
          <option>All</option>
          <option>Event</option>
          <option>Water</option>
          <option>Garbage</option>
          <option>Weather</option>
          <option>Transport</option>
          <option>Electricity</option>
          <option>Health</option>
          <option>Infrastructure</option>
        </select>
      </div>

      {/* Live Feed */}
      <h3 className="text-md font-semibold mb-3 text-white">Live Feed</h3>
      <div className="overflow-y-auto pr-1 max-h-[65vh] custom-scrollbar space-y-3">
        {liveFeed.map((item, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] rounded-lg p-4 transition hover:bg-[#2a2a2a] shadow border border-gray-800"
          >
            <h4 className="text-sm font-semibold text-blue-400">{item.title}</h4>
            <p className="text-xs text-gray-300 mt-1">{item.desc}</p>
            <div className="flex justify-between items-center mt-2 text-[11px] text-gray-500">
              <span>{item.type}</span>
              <span>{item.org}</span>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-gray-600 border-t border-gray-700 pt-3">
        ⓘ Live updates powered by CityMind sensors & alerts.
      </div>
    </div>
  );
};

export default Sidebar;


