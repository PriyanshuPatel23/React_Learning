import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [User, setUser] = useState([])
  const handleFormSubmitData = (data) =>{
    setUser([...User, data]);
  }
  const handleRemoveUser = (id) =>{
    setUser(() => User.filter((item, index) => index != id))
  }
  return (
  <>
  <div className="w-full h-screen bg-zinc-200 flex items-center">
    <div className="container mx-auto">
      <Cards handleRemove={handleRemoveUser} users={User}/>
      <Form handleFormSubmitData={handleFormSubmitData}/>
    </div>
  </div>
  </>
  )
}

export default App;
