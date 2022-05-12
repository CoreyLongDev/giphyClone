import React from "react";
import logo from "../giphy-searcher-logo.svg";

function SearchHeader({ lastSearchString }) {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="" />
        <h1>Giphy Searcher</h1>
      </div>
      <p className="muted">
        Showing results for <strong>{lastSearchString}</strong>
      </p>
    </header>
  );
}

export default SearchHeader;
