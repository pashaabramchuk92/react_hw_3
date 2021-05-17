import FilterPosts from "./FilterPosts";
import SearchBar from "./SearchBar";
import SetShowPosts from "./SetShowPosts";
import ToggleView from "./ToggleView";

const NavBar = ({
  setQuery,
  setOrder,
  setLimit,
  gridView,
  handleToggleView,
}) => {
  return (
    <div class="uk-margin-medium-bottom uk-flex">
      <SearchBar
        setQuery={setQuery}
      />
      <FilterPosts
        setOrder={setOrder}
      />
      <SetShowPosts
        setLimit={setLimit}
      />
      <ToggleView
        gridView={gridView}
        handleToggleView={handleToggleView}
      />
    </div>
  )
}

export default NavBar;