const SearchBar = ({ query, setQuery }) => {  
  return (
    <form
      className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right"
    >
      <span uk-search-icon></span>
      <span className="uk-search-icon uk-search-icon-flip" uk-spinner="ratio: 0.6"></span>
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        value={query}
        onInput={(e) => {
          if (e.target.value) {
            setQuery(e.target.value);
          }
        }}
      />
    </form>
  );
}

export default SearchBar;