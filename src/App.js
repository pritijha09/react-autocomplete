import React from "react";
import "./style.css";
import SearchBar from "./SearchLocationInput";
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="app">
        <SearchBar onChange={() => null} />
      </div>
    </div>
  );
}
