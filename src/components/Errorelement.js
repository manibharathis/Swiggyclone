import { useRouteError } from "react-router-dom"
const Errorelement = ()=>{
    const err = useRouteError()
    console.log(err)
return(
    <div>
     
      <h1>{err.status} - {err.data}</h1>
    </div>
)
     

}

export default Errorelement