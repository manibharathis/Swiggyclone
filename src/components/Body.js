import RestrauntCard from "./RestrauntCard"
import { restraunts } from "../utils/mockData"
import { useState,useEffect } from "react"
const Body = () =>{
    const [resList,setResList] = useState(restraunts)
     const [resFilList,setResFilList] = useState(restraunts)
    const [searchText,setSearchText] = useState("")
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
        const filteredRes = resList.filter((res)=> res.info.avgRating>=4)
        setResList(filteredRes)
    }

    const removeFilters=()=>{
        setResList(restraunts)
    }
    const searchRestraunts=()=>{
        console.log(searchText)
        const filteredRes = resList.filter((res)=>res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
         setResFilList(filteredRes)
    }
    
    return(
        <div className="body">
            <div>
                <input type="text"  className="search-input" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={searchRestraunts}>Search </button>
                <button className="top-rated-res" onClick={filterTopRated}>Top Rated Restraunts</button>
                 <button className="top-rated-res" onClick={removeFilters}>Remove Filters</button>
            </div>
            <div className="res-container">
               { resFilList.map((res)=><RestrauntCard key={res.info.id} res={res.info}/>
               )}
                  
            </div>

        </div>
    )
}

export default Body