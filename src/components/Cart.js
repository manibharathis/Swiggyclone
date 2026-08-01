import appStore from "../utils/store"
import { useSelector } from "react-redux"
const Cart = ()=>{
    const items = useSelector((store)=>store.cart.items)
    console.log(items)
    const total = items.reduce((acc,item)=>{
           return acc+ item.card.info.price/100
    },0)
  let arr =[]
  const uniqueItems = items.reduce((acc,item)=>{
    let id = item.card.info.id
   
    if(!acc[id]){
       acc[id]={
        ...item,
        count :1
       }
    }
    else{
        acc[id].count++
    }
   
    return acc
  },{})
 const uniqueItemsarr = Object.values(uniqueItems)
   console.log(uniqueItemsarr)
    return(
        <div className="w-56 ml-80 mt-6">
            <h2 className="text-6xl ">CART</h2>
            <div>
                {
                    uniqueItemsarr.map((item,i)=>{
                      
                        return(
                        <div className=" flex justify-between mt-7" key={i}>
                        <p>{item.card.info.name}</p>
                         <p>{item.card.info.price/100}</p>
                         <p>({item.count})</p>
                         </div>)
                    })
                }
            </div>
            <p>-----------------------------------</p>
            <div>
                <p>Total : { total}</p>
            </div>
        </div>
    )
}

export default Cart