import React from "react";
import { useForm } from "react-hook-form";

function ReactHook() {
  // Initialize the form with react-hook-form
  const { register, handleSubmit } = useForm();

  // Define the form submission function
  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="email" placeholder="email" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHook;
