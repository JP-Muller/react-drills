import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://memegenerator.net/img/instances/47126103/driving-to-work-in-a-rochester-winter.jpg"} />
      </div>
    );
  }
}

export default App;
