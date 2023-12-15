import React, { Component } from "react";
import Time from "./Time";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
    };
  }
  render() {
    return (
      <>
        {this.state.showTime && <Time />}
        <button
          onClick={() => this.setState({ showTime: !this.state.showTime })}
        >
          {this.state.showTime ? "hide time" : "show time"}
        </button>
      </>
    );
  }
}
