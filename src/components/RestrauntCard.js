
import { CDN_LINK } from "../utils/constants"
import { Link } from "react-router-dom"
import userContext from "../utils/userContext"
import { useContext } from "react"
const RestrauntCard = ({res})=>{
  const  {id,name,cloudinaryImageId,costForTwo,cuisines,avgRating} = res
  const {userName} = useContext(userContext)
    return(
        <Link to={"/restrauntMenu/"+id} className="link">
        <div  className="w-52 border border-black" >
            <img className="w-full h-auto"  alt="res-log" src={CDN_LINK+cloudinaryImageId}/>
            <h3 className="pl-2 font-medium">{name}</h3>
            <h4 className="mb-2 pl-2 text-xs">{cuisines}</h4>
             <h4 className="mb-2 pl-2 text-xs">{costForTwo}</h4>
             <h4 className="mb-2 pl-2 text-xs">{avgRating}</h4>
             <h4 className="mb-2 pl-2 text-xs">{userName}</h4>
        </div>
        </Link>
    )
}

export const PromotedRestroCard = (Pizza)=>{
    return (props)=>{
        return(
            <div>
            <label className="absolute bg-green-400 text-white p-1 m-1">Veg</label>
            <Pizza {...props}/>
            </div>
        )
    }
}

export default RestrauntCard