import { useState } from "react";

const SearchBar = ({ setQuery, isLoadingSearch, setIsLoadingSearch }) => {
  const [value, setValue] = useState('');

  return (
    <form
      className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right"
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(value);
        setIsLoadingSearch(true);
        e.target.reset();
      }}
    >
      <span uk-search-icon></span>
      <span
        className="uk-search-icon uk-search-icon-flip"
        uk-spinner="ratio: 0.6"
        style={{visibility: isLoadingSearch ? 'hidden' : ''}}
      ></span>
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        onInput={(e) => {
          setIsLoadingSearch(false);
          setValue(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchBar;