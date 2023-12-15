import React, { Component } from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import { Dna } from "react-loader-spinner";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentIndexPost: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          posts: data,
          currentIndexPost: 0,
        })
      );
  }
  handlePostIndex(index) {
    this.setState({ currentIndexPost: index });
  }
  render() {
    return (
      <>
        {this.state.posts ? (
          <>
            <SideBar
              handlePostIndex={this.handlePostIndex.bind(this)}
              posts={this.state.posts}
            />
            <Body post={this.state.posts[this.state.currentIndexPost]} />
          </>
        ) : (
          <Dna></Dna>
        )}
      </>
    );
  }
}
