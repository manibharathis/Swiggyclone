import { CDN_LINK } from "../utils/constants"
import { Link } from "react-router-dom"
const RestrauntCard = ({res})=>{
  const  {id,name,cloudinaryImageId,costForTwo,cuisines,avgRating} = res
    return(
        <Link to={"/restrauntMenu/"+id} className="link">
        <div  className="res-card" >
            <img className="res-logo"  alt="res-log" src={CDN_LINK+cloudinaryImageId}/>
            <h3 className="res-title">{name}</h3>
            <h4 className="res-text">{cuisines}</h4>
             <h4 className="res-text">{costForTwo}</h4>
             <h4 className="res-text">{avgRating}</h4>

        </div>
        </Link>
    )
}

export default RestrauntCard