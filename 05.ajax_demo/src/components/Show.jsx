import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../utils/axios";

function Show() {
  // data will be stored in this state
  const [Product, setProduct] = useState([]);

  // fetch data from the API when the component mounts
  const getProducts = () => {
    const api = "/products";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProduct(products.data);
      })
      .catch((err) => console.log(err));
  };

  // run the getProducts function when the component mounts
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ul className="pt-5">
        {Product.length > 0 ? (
          Product.map((p) => (
            <li key={p.id} className="mt-2 rounded p-5 bg-red-200">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>
    </div>
  );
}

export default Show;
