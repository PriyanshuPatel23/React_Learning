import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="mt-10 flex justify-center gap-10">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-300" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>

      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#FCA5A5" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/about"
      >
        about
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user"
      >
        user
      </NavLink>
    </nav>
  );
}

export default Nav;
