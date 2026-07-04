import { useState } from "react";
const Header=()=>{
  const foodHeaderSrc = new URL('../Assets/foodHeader.jpg', import.meta.url).href;
    const [loginText,setLoginText] = useState("Login")
    return(
    <div className="header">
     <img src={foodHeaderSrc} alt={"logo"} className="header-logo"  />
     <div className="header-Items">
         <div>
            <ul className="header-ul">
                <li className="header-li">Home</li>
                <li className="header-li">About Us</li>
                <li className="header-li">Contact US</li>
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