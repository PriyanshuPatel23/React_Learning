import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../Store/reducers/UserReducer";

function Users() {
  const users = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const DeleteHandler = (index) => {
    console.log(index);
    dispatch(userdelete(index));
  };
  return (
    <>
      <div className="m-auto container p-10 mt-5 bg-red-100">
        <h1 className="text-2xl font-bold text-red-900">User List</h1>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={user.id} className="border-b py-4">
                <h2 className="text-xl font-bold">
                  {user.name}{" "}
                  <span
                    onClick={() => DeleteHandler(index)}
                    className="text-red-500 font-black cursor-pointer"
                  >
                    X
                  </span>
                </h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Users;
