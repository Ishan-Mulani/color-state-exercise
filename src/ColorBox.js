import React, { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helper";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: choice(this.props.boxArr, ""),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { boxArr } = this.props;
    const { colorName } = this.state;
    const newChoice = choice(boxArr, colorName);
    this.setState((currState) => {
      return { ...currState, colorName: newChoice };
    });
  }
  render() {
    const { colorName } = this.state;
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: colorName }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColorBox;
