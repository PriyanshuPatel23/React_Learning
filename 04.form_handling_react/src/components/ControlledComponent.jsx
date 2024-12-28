import React from "react";
import { useState } from "react";

function ControlledComponent() {
  // initialize state
  const [val, setVal] = useState({ name: "", email: "" });

  // event handler for form submission and updating state
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(val);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(event) => setVal({ ...val, email: event.target.value })}
          type="email"
          placeholder="email"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ControlledComponent;
