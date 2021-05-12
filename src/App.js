import { useEffect, useState } from "react";

import {
  getData,
  getMoreData,
  toggleOrderData,
  searchPost
} from './api/api';
import FilterPosts from "./components/FilterPosts";
import SetShowPosts from "./components/SetShowPosts";
import SearchBar from "./components/SearchBar";
import Post from "./components/Post";
import LoadMore from "./components/LoadMore";

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [showPosts, setShowPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [next, setNext] = useState(limit);
  const [order, setOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(async () => {
    const posts = await getData(BASE_URL, page, limit);
    setShowPosts(posts);
  }, [page, limit]);
  
  useEffect(async () => {
    const posts = await getMoreData(BASE_URL, next);
    setShowPosts(posts);
  }, [next]);

  const serchedPost = searchPost(showPosts, searchQuery);
  toggleOrderData(order, showPosts);

  const handleLoadMore = () => setNext(Number(limit) + next);

  return (
    <div className="uk-main">
      <div class="uk-section">
        <div class="uk-container">
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
          </div>
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {
            serchedPost.map(post => (
              <Post
                key={post.id}
                post={post}
              />
            ))
            }
          </div>
          <LoadMore
            handleLoadMore={handleLoadMore}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
