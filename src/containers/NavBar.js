import FilterPosts from "../components/FilterPosts";
import SearchBar from "../components/SearchBar";
import SetShowPosts from "../components/SetShowPosts";
import ToggleView from "../components/ToggleView";

const NavBar = ({
  searchQuery,
  setSearchQuery,
  setOrder,
  setLimit,
  gridView,
  listView,
  handleToggleView
}) => {
  return (
    <div class="uk-margin-medium-bottom uk-flex">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FilterPosts
        setOrder={setOrder}
      />
      <SetShowPosts
        setLimit={setLimit}
      />
      <ToggleView
        gridView={gridView}
        listView={listView}
        handleToggleView={handleToggleView}
      />
    </div>
  )
}

export default NavBar;