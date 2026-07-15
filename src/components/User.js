import { useState,useEffect } from "react"
const User=({name,city})=>{
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(1)
    useEffect(()=>{
        console.log("useffect called")
     
       return ()=>{
     console.log("use effect removed")
       }
    },[count])
    return(
        
        <div className="border border-black w-2xl h-auto ml-52 mt-10 text-center">
          
            <h1 >{"User function "}</h1>
            <p>{name}</p>
            <p>{city}</p>
            <p>{count}</p>
           
            <button onClick={()=>{setCount(count+1)}} className="button">+</button>
        </div>
    )
}

export default User