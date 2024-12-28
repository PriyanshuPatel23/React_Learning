import React, { createContext, useState } from "react";

export const UserContext = createContext();

function Context(props) {
  // Define state and setter functions for users
  const [users, SetUsers] = useState([
    { id: 0, username: "John Doe", city: "USA" },
    { id: 1, username: "Krishna", city: "INDIA" },
    { id: 2, username: "julie", city: "COLUMBIA" },
  ]);

  return (
    <UserContext.Provider value={[users, SetUsers]}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
