const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form
    className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right"
  >
    <span uk-search-icon></span>
    <span className="uk-search-icon uk-search-icon-flip" uk-spinner="ratio: 0.6"></span>
    <input
      className="uk-search-input"
      type="search"
      placeholder="Search..."
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
    />
  </form>
);

export default SearchBar;