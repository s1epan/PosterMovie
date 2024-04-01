import { useState } from "react";
import "./Search.css";

function Search(props) {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.func(search);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <button className="search-btn" onClick={() => props.func(search)}>
        Search
      </button>
    </div>
  );
}

export default Search;
