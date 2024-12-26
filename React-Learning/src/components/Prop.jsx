import React from "react";

function Prop({ values, handleClick , index}) {
    const {name, profession, image, friends} = values
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full h-full object-cover object-[center_top]" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button 
  onClick={() => handleClick(index)} 
  className={`mt-4 px-3 py-1 text-xs font-semibold rounded-md ${
    friends ? "bg-green-500" : "bg-blue-500 text-white"
  }`}
>
  {friends ? "Friends" : "Add Friend"}
</button>
      </div>
    </div>
  );
}

export default Prop;