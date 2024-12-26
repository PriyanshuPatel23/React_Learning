import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../utils/axios";

function Show() {
  const [Product, setProduct] = useState([]);
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
