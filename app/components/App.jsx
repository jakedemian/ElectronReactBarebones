// Libraries
import React, { Component } from "react";

class App extends Component {
  state = { count: 123 };
  render() {
    return (
      <div className="header">
        <h1>Hello, React!</h1>
        <p>Electron with React is as easy as {this.state.count}!</p>
      </div>
    );
  }
}

export default App;
