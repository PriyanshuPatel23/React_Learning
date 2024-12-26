import React from "react";
import { Link, Outlet } from "react-router-dom";
function User() {
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-5xl mb-2">User</h1>
      <div className="flex w-1/2 flex-col mt-5">
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/john"
        >
          John
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/Jane"
        >
          Jane
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/Smit"
        >
          Smit
        </Link>
      </div>
      <button className="p-3 bg-zinc-200 text-white ">Explore More</button>

      <hr />

      <Outlet></Outlet>
    </div>
  );
}

export default User;
