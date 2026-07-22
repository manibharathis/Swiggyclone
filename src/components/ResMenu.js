import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import MenuItem from "./MenuItems";
import MenuCategory from "./MenuCategory";
const ResMenu = () => {
  
  let params = useParams();
  let id = params.id;
  const resMenu = useFetchMenu({ id });
  return (
    
    <div className="ml-96 w-2xl">
      <h2 className="font-bold text-2xl">Menu</h2>
      {resMenu.map((card) => {
        let items = card?.card?.card?.itemCards;
        let title = card?.card?.card?.title;
        if (!items) return null;
        return (
          <MenuCategory key={title} title={title} items={items}/>
         
        );
      })}
    </div>
  );
};

export default ResMenu;
