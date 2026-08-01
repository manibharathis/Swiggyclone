import { useState } from "react";
import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import appStore from "../utils/store";
const MenuItem = ({  items }) => {
  console.log(items)
  const dispatch = useDispatch()
  let  [count,setCount] = useState(0)
  const cartdetails  = useSelector((store)=>store.cart.items)
   console.log(cartdetails)
  const incrementCart=(item)=>{
      dispatch(addItem(item))
     
  }
  
  return (
    
    <>
      {items.map((item) => {
        return (
          <div key={item.card.info.id} className="flex justify-between ">
          <div >
            <p className="font-bold">{item.card.info.name}</p>
            <p className="text-sm">{item.card.info.description}</p>
            <p className="text-sm">{item.card.info.price / 100}</p>
            
          </div>
          <div className="p-2.5">
            <button className="bg-black w-15 text-white absolute" onClick={()=>incrementCart(item)}>Add +</button>
            <img className="w-28" alt="img" src={CDN_LINK+item.card.info.imageId} />
          </div>
          </div>
        );
      })}
    </> 
  );
};
export default MenuItem;
