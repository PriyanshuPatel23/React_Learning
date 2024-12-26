import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

function User() {
  const [users, setUSers] = useContext(UserContext);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      <div className="flex w-1/2 flex-col mt-10">
        {users.map((u) => (
          <Link key={u.id} to={`/user/${u.id}`} className="mb-3 bg-red-100 p-3">
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
