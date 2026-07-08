import { useState } from "react"
const User=({name,city})=>{
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(1)
    return(
        <div className="user-card">
            <h1 >{"User function "}</h1>
            <p>{name}</p>
            <p>{city}</p>
            <p>{count}</p>
           
            <button onClick={()=>{setCount(count+1)}} className="button">+</button>
        </div>
    )
}

export default User