import React from "react";
import { useRef } from "react";

function UseRef() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Name: ", name.current.value);
    console.log("Age: ", age.current.value);
    console.log("Email: ", email.current.value);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text"  placeholder="name"/>
        <input ref={age} type="number" placeholder="age" />
        <input ref={email} type="email" placeholder="email"/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default UseRef;
