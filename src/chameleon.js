import { render } from "@testing-library/react";
import React,{ Component } from "react";

class Chameleon extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:'black' //this is the state with propery color with value black
            // we want to update this color
        }
      
    }
    red = () => {
        this.setState ({color:'red'}) //updates the color to red
        
    }
    blue = ()=> {
        this.setState({color:'blue'}) //updates the color to blue

    }
    yellow=()=>{
        this.setState({color:'yellow'}) //updates the color to yellow
    }

    render(){
     return (

     
     <div>
         <h1 style = {{color:this.state.color}}>Chameleon</h1>
         <button onClick = {this.red}>Red</button>
         <button onClick = {this.blue}>Blue</button>
         <button onClick = {this.yellow}>Yellow</button> 
         


         



        </div>)
    }
}export default Chameleon


