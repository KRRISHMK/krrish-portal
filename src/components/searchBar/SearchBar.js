import React from "react";
import "./SearchbarStyle.css"
const SearchBar = () => {
  return (
      <div className="search-box">
        <input type="text" placeholder="search...." />
        <a href="/" className="icon">
          <i className="fa-search"></i>
        </a>
      </div>
  );
};

export default SearchBar;
