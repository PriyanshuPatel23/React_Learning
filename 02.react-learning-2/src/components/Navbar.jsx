import React from "react";
import styles from "./styles.module.css";

function Navbar({ data }) {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3 className={`${styles.a}`}>Orange</h3>
      <div className="flex p-2 px-4 gap-3 bg-orange-600 text-white rounded-md text-sm">
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.added).length}</h4>
      </div>
    </div>
  );
}

export default Navbar;