import React, { Component } from "react";
import Overview from "./components/General";

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Overview />
      </div>
    );
  }
}

export default App;
