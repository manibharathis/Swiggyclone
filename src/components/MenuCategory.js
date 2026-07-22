import MenuItem from "./MenuItems";
import { useState } from "react";
const MenuCategory=({title,items})=>{
      const [showItem,setShowItem] = useState(true)
return (
    
    <div className="" key={title}>
            <div onClick={()=>{setShowItem(!showItem)}} className="text-center flex justify-between ">
              <h1 className="font-bold mt-5 content-center">
                {title} ({items.length})
              </h1>
              <div>⬆️</div>
            </div>
            {showItem?<MenuItem  items={items} /> :""} 
     </div>
  );
}

export default MenuCategory