import React from 'react'
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count1:1
       }
       console.log(this.props.name+" constructor")
    }
    componentDidMount(){
        console.log(this.props.name+" component did mount")
    }
    render(){
     const   {name,city} = this.props; 
     const {count,count1} = this.state;
     console.log(name+" render")
        return(
            <div className='user-card'>
                <h1>{"user class"}</h1>
                <p>{name}</p>
                <p>{city}</p>
                <p>{count}</p>
                <button className='button' onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>+</button>
            </div>
        )
    }
}

export default UserClass