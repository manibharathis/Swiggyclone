import { useEffect,useState } from "react"
const useFetchMenu=({id})=>{
const [resMenu,setResMenu] = useState([])
  useEffect(()=>{
    fetchData()
  }
   ,[])

  const fetchData= async ()=>{
    console.log(id)
     const menu = await fetch(  "https://namastedev.com/api/v1/listRestaurantMenu/" + id,)
        const resMenuJson = await menu.json()
    
       setResMenu(
        resMenuJson.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards,
      );
    
     
    }
     return resMenu
  }




export default useFetchMenu