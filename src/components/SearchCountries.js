import React from "react";

function SearchCountries({ inputValue, setInputValue }) {
  return (
    <div className="d-flex justify-content-center my-3">
      <input
        className="search-bar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name="searchBar"
        type="text"
        placeholder="Ülke arayın..."
      />
    </div>
  );
}

export default SearchCountries;
