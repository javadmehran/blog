import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            time:new Date().toLocaleTimeString()
        }
        
    }
   componentWillUnmount(){
    clearInterval(this.setTime)
   }
    componentDidMount(){
        this.setTime=setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()
            })
            console.log(new Date().toLocaleTimeString())
        },1000)
    }
  render() {
    return (
      <>    
        <h2>{this.state.time}</h2>
      </>
    )
  }
}
