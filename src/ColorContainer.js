import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorContainer.css";

class ColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick(evt) {}
  static defaultProps = {
    boxArr: [
      "lightblue",
      "lightcoral",
      "lightgreen",
      "lightsalmon",
      "lightslategrey",
      "lightseagreen",
      //add
      "palevioletred",
      "rebeccapurple",
      "mediumaquamarine",
      "grey",
      "olive",
      "papayawhip",
    ],
  };
  render() {
    const { boxArr } = this.props;
    return (
      <div className="ColorContainer">
        {boxArr.map((bColor) => {
          return <ColorBox colorName={bColor} boxArr={boxArr} />;
        })}
      </div>
    );
  }
}

export default ColorContainer;
