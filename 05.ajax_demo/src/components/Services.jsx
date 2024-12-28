import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

function Services() {
  // useState Hook to store the fetched data
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is very large data");

  // useEffect Hook to fetch data when the component mounts and when the second state changes
  useEffect(() => {
    getUser();
    console.log("Service Component is Created");

    return () => {
      console.log("Service Component is Destroyed");
    };
  }, [second]);

  // Function to fetch data from an API
  const getUser = () => {
    axios
      .get("/users")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>{first}</h1>
      <button
        className="rounded mb-10 bg-red-200 p-2"
        onClick={() => setFirst("normal data has been changed")}
      >
        Toggle Data
      </button>
      <h1>{second}</h1>
      <button
        className="rounded mb-10 bg-red-200 p-2"
        onClick={() => setSecond("the large data has been changed")}
      >
        Toggle Data
      </button>
    </div>
  );
}

export default Services;
