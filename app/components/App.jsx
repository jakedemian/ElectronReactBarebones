// Libraries
import React, { Component } from "react";

import Search from "./search";
import Results from "./results";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <h1>Hello, React</h1>
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
