import Shimmer from "./Shimmer"
const Contact=()=>{
    return(
        <div>
          <h2>Contact Us</h2>
          <form className="flex flex-col w-xl ml-80">
            <input type="text" className="bg-amber-100 m-4 ml-6" placeholder="  name" />
            <input type="text" className="bg-amber-100 m-4 ml-6 h-28" placeholder="  message" />
           <button className="  p-3 border-2 w-20 ml-36"  onClick={(e)=>{e.preventDefault()}}>submit</button>
           
          </form>

        </div>
    )
}
export default Contact