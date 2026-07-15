import User from "./User"
import UserClass from "./UserClass"
import React from 'react'
class About extends React.Component{
    constructor(props){
        super(props)
       
    }
    componentDidMount(){
     
    }
    render(){
      
        return(
              <div>
            <User name="mani bharathi 1"city="chennai" />
             {/* <UserClass name="mani bharathi 1"city="chennai" />
             <UserClass name="mani bharathi 2"city="chennai" />
              <UserClass name="mani bharathi 3"city="chennai" /> */}
        </div>
        
    )}
}


export default About