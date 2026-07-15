import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
const ResMenu = () => {
  
 
  let params = useParams();
  let id = params.id;
   const resMenu = useFetchMenu({id});

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl">Menu</h2>
      {resMenu.map((card) => {
       let items = card?.card?.card?.itemCards;
      let  title = card?.card?.card?.title;
        if (!items) return null;
        return (
          <div key={title}>
            <h1 className="font-bold mt-5">{title}</h1>
            {items.map((item) => {
              return (
                <div key={item.card.info.id}>
                  <p className="font-bold">{item.card.info.name}</p>
                  <p className="text-sm">{item.card.info.description}</p>
                  <p className="text-sm">{item.card.info.price / 100}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ResMenu;
