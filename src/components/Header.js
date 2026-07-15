import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const foodHeaderSrc = new URL('../Assets/foodHeader.jpg', import.meta.url).href;
    const [loginText,setLoginText] = useState("Login")
    const status1 = useOnlineStatus()
   
    return(
    <div className="flex border border-black m-1 justify-between">
     <img src={foodHeaderSrc} alt={"logo"} className="w-24 h-full"   />
     <div className="w-1/2">
         <div>
            <ul  className="flex justify-between " >
                <li  className=" mt-6"><Link className="link" to="/">{!status1?"🔴Online":"🟢Offline"}</Link></li>
                <li  className="mt-6"><Link className="link" to="/">Home</Link></li>
                <li className=" mt-6"><Link className="link" to="/about">About Us</Link></li>
                <li className=" mt-6"><Link className="link" to="/contact">Contact US</Link></li>
                <li className=" mt-6">Cart</li>
                 <li className=" mt-6"><Link  className="link" to="/grocery">Grocery</Link></li>
                <button className="mr-4  mt-6" onClick={()=>{loginText=="Login"?setLoginText("Logout"):setLoginText("Login")}}>{loginText}
                </button>
            </ul>
         </div>
     </div>
    </div>
    )
}

export default Header