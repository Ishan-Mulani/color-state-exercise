import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorContainer.css";

class ColorContainer extends Component {
  static defaultProps = {
    numOfBoxes: 18,
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
    const { boxArr, numOfBoxes } = this.props;
    return (
      <div className="ColorContainer">
        {Array(numOfBoxes)
          .fill(true)
          .map((bColor) => {
            return <ColorBox boxArr={boxArr} />;
          })}
      </div>
    );
  }
}

export default ColorContainer;
