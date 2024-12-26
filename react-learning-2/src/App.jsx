import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  const data = [
    {
      name: "one love",
      artist: "Shubh",
      image:
        "https://images.unsplash.com/photo-1733860474140-1734a8361e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      added: false,
    },
    {
      name: "gulabi aankhein",
      artist: "Kishore da",
      image:
        "https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      added: false,
    },
    {
      name: "oh maahi",
      artist: "unknown",
      image:
        "https://images.unsplash.com/photo-1733227800842-dcc9d4cfeabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (cardIndex) => {
    setSongData(previous=>{
      return previous.map((item, index)=>{
        if(index === cardIndex){
          return {...item, added:!item.added}
        }
        return item;
      })
    })
  }
  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData}/>
        <div className="px-20 flex gap-10 flex-wrap">
          {songData.map((obj, index) => {
            return <Card key={index} data={obj} index={index} handleClick={handleClick} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
