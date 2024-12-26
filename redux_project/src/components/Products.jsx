import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../Store/actions/ProductActions";
import { useEffect } from "react";

function Products() {
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);
  return (
    <div>
      <div className="m-auto container p-10 mt-5 bg-red-100">
        <h1 className="text-2xl font-bold text-red-900">Product List</h1>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={product.id} className="border-b py-4">
                <h2 className="text-xl font-bold">
                  {product.title}{" "}
                  <span
                    className="text-red-500 font-black cursor-pointer"
                  >
                    X
                  </span>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Products;
