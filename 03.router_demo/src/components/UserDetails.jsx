import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/user");
  };
  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-5xl mb-2">User Detail</h1>
      <h1 className="text-3xl">hii {name}</h1>
      <button onClick={goBack} className="mt-5 text-white px-3 py-2 bg-red-300">
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
