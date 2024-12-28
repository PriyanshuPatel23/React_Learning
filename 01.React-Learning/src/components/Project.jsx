import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Project() {
  const [val, setVal] = useState(false);
  
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-60 h-32 bg-zinc-500 flex rounded overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1721332155637-8b339526cf4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={`shrink-0 transition-all	 ease-in duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1733855803980-eeed78f64836?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={`shrink-0 transition-all	 ease-in duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[7%] left-1/2 -translate-x-[50%]"
        >
          <FaLongArrowAltRight size={"0.7em"} />
        </span>
      </div>
    </div>
  );
}

export default Project;
