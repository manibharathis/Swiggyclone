import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const foodHeaderSrc = new URL('../Assets/foodHeader.jpg', import.meta.url).href;
    const [loginText,setLoginText] = useState("Login")
    return(
    <div className="header">
     <img src={foodHeaderSrc} alt={"logo"} className="header-logo"  />
     <div className="header-Items">
         <div>
            <ul className="header-ul">
                <li  className="header-li"><Link className="link" to="/">Home</Link></li>
                <li className="header-li"><Link className="link" to="/about">About Us</Link></li>
                <li className="header-li"><Link className="link" to="/contact">Contact US</Link></li>
                <li className="header-li">Cart</li>
                <button className="login" onClick={()=>{loginText=="Login"?setLoginText("Logout"):setLoginText("Login")}}>{loginText}
                </button>
            </ul>
         </div>
     </div>
    </div>
    )
}

export default Header