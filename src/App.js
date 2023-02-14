import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Work from "./components/Work";
import "./styles/App.module.css";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <General />
        <Education />
        <Work />
      </div>
    );
  }
}

export default App;
