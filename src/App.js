import { useEffect, useState } from "react";

import { getData, getMoreData, getTotalCount } from './api/api';
import LoadMore from "./components/LoadMore";
import PostsGridPage from "./components/PostsGridPage";
import PostsListPage from "./components/PostsListPage";
import NavBar from "./components/NavBar";
import PageList from "./components/PageList";
import Header from "./components/Header";

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const [isLoadingSearch, setIsLoadingSearch] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [gridView, setGridView] = useState(true);
  const [next, setNext] = useState(0);
  const [total, setTotal] = useState(0);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const fetchTotal = async () => {
      const totalCount = await getTotalCount(BASE_URL, page);
      setTotal(totalCount);
    }
    fetchTotal();
  }, [total]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getData(BASE_URL, page, limit, order, query);
      setPosts(posts);
    }
    fetchPosts();
  }, [page, limit, order, query]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getMoreData(BASE_URL, 0, next + limit, order);
      setPosts(posts);
    }
    fetchPosts();
  }, [next, order]);

  const handleToggleView = () => setGridView(!gridView);

  const handleLoadMore = () => {
    setQuery('');
    setNext(next + Number(limit));
  };

  const saveLikePost = (id, post) => localStorage.setItem(id, post);
  const deleteLikePost = (id) => {
    setLikedPosts(likedPosts.filter(post => id !== post.id));
    localStorage.removeItem(id);
  };
  const getLikedPosts = (id) => localStorage.getItem(id);


  return (
    <div className="uk-main">
      <Header
        likedPosts={likedPosts}
        deleteLikePost={deleteLikePost}
        setLikedPosts={setLikedPosts}
      />
      <div class="uk-section">
        <div class="uk-container">
          <NavBar
            setQuery={setQuery}
            setOrder={setOrder}
            setLimit={setLimit}
            gridView={gridView}
            handleToggleView={handleToggleView}
            isLoadingSearch={isLoadingSearch}
            setIsLoadingSearch={setIsLoadingSearch}
          />
          {gridView  
            ? <PostsGridPage
                posts={posts}
                saveLikePost={saveLikePost}
                deleteLikePost={deleteLikePost}
                getLikedPosts={getLikedPosts}
                setLikedPosts={setLikedPosts}
              />
            : <PostsListPage
                posts={posts}
                saveLikePost={saveLikePost}
                deleteLikePost={deleteLikePost}
                getLikedPosts={getLikedPosts}
                setLikedPosts={setLikedPosts}
              />}
          <LoadMore
            handleLoadMore={handleLoadMore}
            isLoadingMore={isLoadingMore}
            setIsLoadingMore={setIsLoadingMore}
          />
          <PageList
            total={total}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
