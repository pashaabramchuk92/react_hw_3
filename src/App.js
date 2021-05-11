import { useEffect, useState } from "react";

import {
  getData,
  searchPost,
  filterPosts,
  paginatePosts,
  loadMore
} from './api/api';
import FilterPosts from "./components/FilterPosts";
import SetShowPosts from "./components/SetShowPosts";
import SearchBar from "./components/SearchBar";
import Post from "./components/Post";
import LoadMore from "./components/LoadMore";
let arrayForHoldingPosts = [];
const postsPerPage = 3;

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [loadNext, setLoadNext] = useState(limit === 6 ? 6 : limit);
  const [showPost, setShowPosts] = useState([]);

  const searchedPost = searchPost(posts, searchQuery);

  filterPosts(order, posts);

  // const load = (posts, page, limit) => {
  //   console.log(posts, page, limit);
  // }
  // load(posts, page, limit)

  useEffect(() => {
    getData(BASE_URL, page, limit).then(post => setPosts(post));
  }, [page, limit]);

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
            searchedPost.map(post => (
              <Post
                key={post.id}
                post={post}
              />
            ))}
          </div>
          <LoadMore
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
