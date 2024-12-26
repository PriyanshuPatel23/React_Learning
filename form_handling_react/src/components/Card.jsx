import React from "react";

function Card({user, handleRemove, id}) {
  return (
    <>
      <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
          <img
            className="h-full w-full object-cover overflow-hidden"
            src={user.imageUrl}
            alt=""
          />
        </div>
        <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
        <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
        <p className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quasi!
          Expedita, harum?
        </p>
        <button onClick={()=>handleRemove(id)} className="px-3 py-1 bg-red-500 text-xs rounded-md font-semibold text-white mt-4">
          Remove It
        </button>
      </div>
    </>
  );
}

export default Card;
