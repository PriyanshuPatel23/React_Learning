import React, { useState } from "react";

function Stated() {
  const [val, setVal] = useState({ name: "foo", isBanned: true });
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <div className="p-4">
      <div>name: {val.name}</div>
      <div>Banned: {val.isBanned.toString()}</div>

      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-2 py-1 mt-2 rounded-full text-xs ${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        }`}
      >
        Ban Badlo
      </button>

      <div>
        {num.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
      <button
        onClick={() =>
          setNum(() => {
            return num.filter((item, index) => index != num.length - 1);
          })
        }
        className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500"
      >
        Remove last
      </button>
    </div>
  );
}

export default Stated;
