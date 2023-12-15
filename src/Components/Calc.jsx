import React, { Component } from 'react'
import './calc.css'
export default class Calc extends Component {
    constructor(props){
        super(props)
        this.titleInput=React.createRef()
    }
    handleTitle(){
        document.title=this.titleInput.current.value
        this.titleInput.current.value=''
    }
  render() {
    return (
      <>
        <input ref={this.titleInput} type='text'/>
        <button onClick={this.handleTitle.bind(this)}>change title</button> 
        <box-icon name='show'></box-icon>
    </>
    )
  }
}
