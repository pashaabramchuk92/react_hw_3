import { useEffect, useState } from "react";

import {
  getData,
  getMoreData,
  getAllData,
  toggleOrderData,
  searchPost
} from './api/api';
import FilterPosts from "./components/FilterPosts";
import SetShowPosts from "./components/SetShowPosts";
import SearchBar from "./components/SearchBar";
import PostGridView from "./components/PostGridView";
import LoadMore from "./components/LoadMore";
import PostListView from "./components/PostListView";
import PostsGridPage from "./containers/PostsGridPage";
import PostsListPage from "./containers/PostsListPage";
import ToggleView from "./components/ToggleView";
import NavBar from "./containers/NavBar";
import PageList from "./components/PageList";

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [showPosts, setShowPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [next, setNext] = useState(limit);
  const [order, setOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [listView, setListView] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getData(BASE_URL, page, limit);
      setShowPosts(posts);
    }
    fetchPosts();
  }, [page, limit]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getMoreData(BASE_URL, next);
      setShowPosts(posts);
    }
    fetchPosts();
  }, [next]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllData(BASE_URL);
      setAllPosts(posts);
    }
    fetchPosts();
  }, []);

  const serchedPost = searchPost(showPosts, searchQuery);
  toggleOrderData(order, showPosts);

  const handleLoadMore = () => setNext(Number(limit) + next);

  const handleToggleView = () => {
    setListView(!listView);
    setGridView(!gridView);
  }

  const countPages = Math.ceil(allPosts.length / limit);

  return (
    <div className="uk-main">
      <div class="uk-section">
        <div class="uk-container">
          <NavBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setOrder={setOrder}
            setLimit={setLimit}
            gridView={gridView}
            listView={listView}
            handleToggleView={handleToggleView}
          />
          {gridView && <PostsGridPage serchedPost={serchedPost} />}
          {listView && <PostsListPage serchedPost={serchedPost} />}
          <LoadMore
            handleLoadMore={handleLoadMore}
          />
          <PageList
            countPages={countPages}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
