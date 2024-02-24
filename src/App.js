import "./App.css";
import React, { Component } from "react";
import ColorContainer from "./ColorContainer";

function App() {
  return (
    <div className="App">
      <ColorContainer numOfBoxes={24} />
    </div>
  );
}

export default App;
