import FilterPosts from "./FilterPosts";
import SearchBar from "./SearchBar";
import SetShowPosts from "./SetShowPosts";
import ToggleView from "./ToggleView";

const NavBar = ({
  query,
  setQuery,
  // setOrder,
  setLimit,
  // gridView,
  // listView,
  // handleToggleView
}) => {
  return (
    <div class="uk-margin-medium-bottom uk-flex">
      <SearchBar
        query={query}
        setQuery={setQuery}
      />
      <FilterPosts
        // setOrder={setOrder}
      />
      <SetShowPosts
        setLimit={setLimit}
      />
      <ToggleView
        // gridView={gridView}
        // listView={listView}
        // handleToggleView={handleToggleView}
      />
    </div>
  )
}

export default NavBar;