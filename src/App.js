import { useEffect, useState } from "react";

import {
  getData,
  searchData,
} from './api/api';
import LoadMore from "./components/LoadMore";
import PostsGridPage from "./components/PostsGridPage";
import PostsListPage from "./components/PostsListPage";
import NavBar from "./components/NavBar";
import PageList from "./components/PageList";
import Header from "./components/Header";

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getData(BASE_URL, page, limit);
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchSeachPost = async () => {
      const post = await searchData(BASE_URL, query);
      setSearchedPosts(post);
    }
    fetchSeachPost();
  }, [query]);

  console.log(posts);

  return (
    <div className="uk-main">
      <div class="uk-section">
        <div class="uk-container">
          <NavBar
            query={query}
            setQuery={setQuery}
            setLimit={setLimit}
          />  
          <PostsGridPage
            posts={query ? searchedPosts : posts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
