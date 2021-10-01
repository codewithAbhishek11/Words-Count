import React,{Component} from 'react'
import Child from './Child';

class Practice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"red",
            brand:"mustang"
        }
    }
  change =() =>{
      this.setState({color:"pink"})
  }

 getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    `Before the update, the favorite was ${prevState.color}`
  }
  
  
    render(){
      let handle;
        if(this.state.color){
            handle=<Child/>
        }
        return( 
            <>
         
            <h1>Hello From Practice {this.state.color} {this.state.brand} </h1>
            <button onClick={this.change}>Click ME</button>
            <div1 id="div1"></div1>
            <div1 id="div2"></div1>
            </>
        )
    }
}

export default Practice;