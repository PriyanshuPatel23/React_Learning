import React, { useState } from "react";
import Card from "./components/Card";
import Music from "./components/Music";
import State from "./components/State";
import Stated from "./components/Stated";
import Project from "./components/Project";
import Prop from "./components/Prop";

function App() {
  const data =[
    {name:"Rahul", profession:"Artist", image:"https://images.unsplash.com/photo-1733860474140-1734a8361e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", friends: false},
    {name:"Smit", profession:"Singer", image:"https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D" , friends: false},
    {name:"Amit", profession:"Engineer", image:"https://images.unsplash.com/photo-1733227800842-dcc9d4cfeabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", friends:false},
  ]

  const [realdata, setRealData] = useState(data)
  const handleFriendButton = (cardIndex)=>{
    setRealData((previous) => {
    return  previous.map((item, index) => {
        if(index === cardIndex){
          return{...item, friends: !item.friends}
        }
        return item
      })
    })
  }
  return (
    <>
      {/* <Card /> */}
      {/* <Music /> */}
      {/* <State /> */}
      {/* <Stated /> */}
      {/* <Project /> */}
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {realdata.map((item, index) => (
      <Prop key={index} index={index} handleClick={handleFriendButton} values={item}/>
      ))}
      </div>
    </>
  );
}

export default App;
