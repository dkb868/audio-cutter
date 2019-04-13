import AudioCutter from "./audiocutter";
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
  render() {
    return <AudioCutter url="https://instaud.io/_/3xUG.mp3" />;
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));
