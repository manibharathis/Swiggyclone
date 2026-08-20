import MenuItem from "./MenuItems";
import { useState } from "react";
const MenuCategory=({title,items,showIndex,setIndex,index})=>{
     
      
       
return (
    
    <div  className="" key={title}>
            <div onClick={()=>setIndex(index)}  className="text-center flex justify-between ">
              <h1 className="font-bold mt-5 content-center">
                {title} ({items.length})
              </h1>
              <div>⬆️</div>
            </div>
            {showIndex == index ?<MenuItem   items={items} /> :""} 
     </div>
  );
}

export default MenuCategory