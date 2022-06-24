import "./SearchBar.css";
import { useState } from "react";
const SearchBar = ({ onChange, value }) => {
  return (
    <div className="flex-row searchbar-container">
      <div className="icon-parent-container flex-col justify-center-flex">
        <div className="flex-row align-center-flex justify-center-flex">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>

      <input
        className="searchbar container-box-shadow-purple"
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export { SearchBar };
