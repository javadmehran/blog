import React, { Component } from "react";
import "./calc.css";
export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
    };
  }
  handleShowPass() {
    this.setState({
      showPass: !this.state.showPass,
    });
  }
  render() {
    return (
      <div className="password">
        <input type={this.state.showPass ? "text" : "password"} />
        <span onClick={this.handleShowPass.bind(this)}>
          <box-icon name={this.state.showPass ? "hide" : "show"}></box-icon>
        </span>
      </div>
    );
  }
}
