import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
  return (
    <div className="w-full p-4 flex justify-center flex-wrap h-96 max-h-96 overflow-auto gap-4">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            id={index}
            user={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Cards;
