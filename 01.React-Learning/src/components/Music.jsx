import React from "react";

function Music() {
  const data = [
    {
      name: "Mahiya ve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse enimratione",
    },
    {
      name: "Hare Krishna",
      description: "Lorem ipsum dolor sit amet consectet",
    },
  ];

  const handleClick = () => {
    alert("Click");
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col gap-10 justify-center items-center">
      {data.map((elem, index) => (
        <div className="w-60 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{elem.name}</h3>
          <p className="text-xs mt-2">{elem.description}</p>
          <button
            onClick={handleClick}
            className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Music;
