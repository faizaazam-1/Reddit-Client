// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import AddLaneButton from "./components/AddLaneButton";
import LaneContainer from "./components/LaneContainer";

function App() {
  const [lanes, setLanes] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      {/* Title Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">
          FE19 - Reddit Client
        </h1>
        <p className="text-gray-400 text-lg italic">
          A browser-based Reddit client that displays multiple subreddits in
          separate, customizable lanes.
        </p>
      </div>

      {/* Lanes Section */}
      <main className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AddLaneButton
            onAdd={(subreddit) => setLanes([...lanes, subreddit])}
          />
          {lanes.map((subreddit) => (
            <LaneContainer
              key={subreddit}
              subreddit={subreddit}
              onRemove={() => setLanes(lanes.filter((l) => l !== subreddit))}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
