import React, { Component } from "react";
import "./App.scss";
import Title from "./components/Title";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";
import Info3 from "./components/Info3";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Info1 />
        <Info2 />
        <Info3 />
      </div>
    );
  }
}

export default App;
