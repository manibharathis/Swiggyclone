import RestrauntCard,{PromotedRestroCard} from "./RestrauntCard"
import { restraunts } from "../utils/mockData"
import { useState,useEffect,useContext } from "react"
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext"

const Body = () =>{
    const [resList,setResList] = useState(restraunts)
     const [resFilList,setResFilList] = useState(restraunts)
    const [searchText,setSearchText] = useState("")
  
     const onlineStatus = useOnlineStatus();
     const PromotedRestroCardComp = PromotedRestroCard(RestrauntCard)
     console.log(onlineStatus)
      
     const {userName,setUserName} = useContext(userContext)
     console.log("hello "+ setUserName)
    useEffect(()=>{
        const fetchData = async()=>{
             const data = await fetch('https://namastedev.com/api/v1/listRestaurants')
               const jsonData = await data.json()
               console.log(jsonData)
               const restaurants = jsonData?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(restaurants);
            setResList(restaurants)
            }
       
      fetchData()
        
    },[])
    const filterTopRated=()=>{
        const filteredRes = resList.filter((res)=> res.info.avgRating>=4.5)
        setResFilList(filteredRes)
    }

    const removeFilters=()=>{
         setResFilList(restraunts)
    }
    const searchRestraunts=()=>{
        console.log(searchText)
        const filteredRes = resList.filter((res)=>res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
         setResFilList(filteredRes)
    }
    if(resList=='null') return <Shimmer />

  

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
    return(
       
        <div className="body">
            <div>
                <input type="text" className=" m-2.5 border border-grey"  value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                <button className="m-2.5" onClick={searchRestraunts}>Search </button>
                <button className="m-2.5 cursor-pointer" onClick={filterTopRated}>Top Rated Restraunts</button>
                 <button className="m-2.5 cursor-pointer" onClick={removeFilters}>Remove Filters</button>
                 <input type="text" className=" m-2.5 border border-grey"  value={userName} onChange={(e)=>setUserName(e.target.value)} />
               
            </div>
            <div className="flex m-2.5 flex-wrap gap-5">
               { resFilList.map((res)=>res.info.veg?<PromotedRestroCardComp key={res.info.id} res={res.info} />:<RestrauntCard key={res.info.id} res={res.info}/>
               )}
                  
            </div>
         

        </div>
      )  
    
}

export default Body