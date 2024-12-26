import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/Context";

function Userdetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users] = useContext(UserContext);
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-200">{users[id].username}</h1>
      <h3 className="text-red-400">{users[id].city}</h3>
      <button
        onClick={() => navigate(-1)}
        className="rounded mt-5 bg-red-100 p-2"
      >
        Go Back
      </button>
    </div>
  );
}

export default Userdetails;
