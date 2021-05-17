import { useEffect, useState } from "react";

import { getData, getMoreData } from './api/api';
import LoadMore from "./components/LoadMore";
import PostsGridPage from "./components/PostsGridPage";
import PostsListPage from "./components/PostsListPage";
import NavBar from "./components/NavBar";
import PageList from "./components/PageList";
import Header from "./components/Header";

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [gridView, setGridView] = useState(true);
  const [next, setNext] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getData(BASE_URL, page, limit, order, query);
      setPosts(posts);
    }
    fetchPosts();
  }, [page, limit, order, query]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getMoreData(BASE_URL, 0, next, order);
      setPosts(posts);
    }
    fetchPosts();
  }, [next, order]);

  const handleToggleView = () => setGridView(!gridView);

  const handleLoadMore = () => {
    setQuery('');
    setNext(next + Number(limit));
  };


  //pagination, like/unlike, header, X-total-count?
  
  return (
    <div className="uk-main">
      <Header />
      <div class="uk-section">
        <div class="uk-container">
          <NavBar
            setQuery={setQuery}
            setOrder={setOrder}
            setLimit={setLimit}
            gridView={gridView}
            handleToggleView={handleToggleView}
          />
          {gridView  
            ? <PostsGridPage posts={posts} /> 
            : <PostsListPage posts={posts} />}
          <LoadMore
            handleLoadMore={handleLoadMore}
          />
          <PageList

          />
        </div>
      </div>
    </div>
  );
}

export default App;
