import React, { useState } from "react";

function State() {
  const [Score, setScore] = useState(12);

  return (
    <div className="p-4">
      <h1>{Score}</h1>
      <button
        onClick={() => setScore(200)}
        className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"
      >
        Score Badlo
      </button>

      <h1>{Score}</h1>
      <button
        onClick={() => setScore((prev) => prev + 1)}
        className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"
      >
        Score Badlo
      </button>
    </div>
  );
}

export default State;
