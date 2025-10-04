import React from "react";
import IconButton from "./IconButton";
import { LoopIcon } from "../../script/constants";

function SearchBar() {
  return (
    <form className="header__search-bar search-bar hidden-mobile">
      <input
        className="search-bar__input input"
        type="text"
        placeholder="Search your task here..."
      />
      <IconButton
        className="search-bar__button"
        type="submit"
        ariaLabel="Search"
      >
        {<LoopIcon />}
      </IconButton>
    </form>
  );
}

export default SearchBar;


