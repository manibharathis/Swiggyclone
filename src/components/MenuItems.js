import { useState } from "react";
const MenuItem = ({  items }) => {
  return (
    
    <>
      {items.map((item) => {
        return (
          <div key={item.card.info.id}>
            <p className="font-bold">{item.card.info.name}</p>
            <p className="text-sm">{item.card.info.description}</p>
            <p className="text-sm">{item.card.info.price / 100}</p>
          </div>
        );
      })}
    </> 
  );
};
export default MenuItem;
