import React, { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp1: 0,
      inp2: 0,
      result: 0,
    };
  }
  render() {
    return (
      <>
      <div className="calc">
        <input
          type="number"
          value={this.state.inp1}
          onChange={(e) => this.setState({ inp1: e.target.value })}
          name=""
          id=""
        />
        <input
          type="number"
          value={this.state.inp2}
          onChange={(e) => this.setState({ inp2: e.target.value })}
          name=""
          id=""
        />
        <br></br>
        <button
          onClick={() => {
            this.setState({
              result: +this.state.inp1 + +this.state.inp2,
              inp1: "",
              inp2: "",
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              result: this.state.inp1 - this.state.inp2,
              inp1: "",
              inp2: "",
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState({
              result: this.state.inp1 / this.state.inp2,
              inp1: "",
              inp2: "",
            });
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            this.setState({
              result: this.state.inp1 * this.state.inp2,
              inp1: "",
              inp2: "",
            });
          }}
        >
          *
        </button>
        <h1>{this.state.result}</h1>
        </div>
      </>
    );
  }
}
