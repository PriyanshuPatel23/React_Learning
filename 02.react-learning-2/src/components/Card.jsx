import React from "react";

function Card({ data, handleClick, index }) {
  const { name, image, added, artist } = data;

  return (
    <div className="w-60 bg-zinc-100 p-4 pb-8 rounded-md flex gap-4 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-2 py-2 whitespace-nowrap ${
          added === false ? "bg-orange-600" : "bg-teal-500"
        } absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}
      >
        {added === false ? "Add to Favourites" : "added"}
      </button>
    </div>
  );
}

export default Card;
