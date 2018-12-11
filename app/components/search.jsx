import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search">
        <input type="text" id="playerName" placeholder="Player name" />
        <button type="button" id="searchButton">
          Lookup
        </button>
      </div>
    );
  }
}

export default Search;
