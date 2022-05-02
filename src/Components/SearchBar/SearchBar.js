import "./SearchBar.css";
import { useState } from "react";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchbarChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex-row searchbar-container">
      <div className="icon-parent-container flex-col justify-center-flex">
        <div className="flex-row align-center-flex justify-center-flex">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="searchbar"
        onChange={searchbarChangeHandler}
        value={search}
      />
    </div>
  );
};

export { SearchBar };
