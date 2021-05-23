import FilterPosts from "./FilterPosts";
import SearchBar from "./SearchBar";
import SetShowPosts from "./SetShowPosts";
import ToggleView from "./ToggleView";

const NavBar = ({
  setIsSearching,
  isSearching,
  setQuery,
  setOrder,
  setLimit,
  viewGrid,
  viewList,
  setViewGrid,
  setViewList,
}) => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <SearchBar
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        setQuery={setQuery}
      />
      <FilterPosts setOrder={setOrder} />
      <SetShowPosts setLimit={setLimit} />
      <ToggleView
        viewGrid={viewGrid}
        viewList={viewList}
        setViewGrid={setViewGrid}
        setViewList={setViewList}
      />
    </div>
  )
}

export default NavBar;