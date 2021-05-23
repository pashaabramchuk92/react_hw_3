import { useEffect, useState } from "react";

import { getData, getMoreData, getTotalCount } from './api/api';
import useDebounce from './hooks/useDebounce';
import { BlogProvider } from './BlogContext';

import LoadMore from "./components/LoadMore";
import PostsGridPage from "./components/Posts/PostsGridPage";
import PostsListPage from "./components/Posts/PostsListPage";
import NavBar from "./components/NavBar/NavBar";
import PageList from "./components/PageList";
import Header from "./components/Header";

const App = () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [order, setOrder] = useState('asc');
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [viewGrid, setViewGrid] = useState(true);
  const [viewList, setViewList] = useState(false);
  const [next, setNext] = useState(0);
  const [isLoading, setIsLoding] = useState(false);

  const debouncedValue = useDebounce(query, 500);

  useEffect(() => {
    const fetchTotal = async () => {
      const totalCount = await getTotalCount(page);
      setTotal(totalCount);
    };
    fetchTotal();
  }, [total, page]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getData(page, limit, order, debouncedValue);
      setPosts(data);
      setIsSearching(false);
    }
    fetchPosts();
  }, [debouncedValue, page, limit, order]);

  useEffect(() => {
    const fetchMorePosts = async () => {
      const morePosts = await getMoreData(0, next + limit, order);
      setPosts(morePosts);
      setIsLoding(false);
    }
    fetchMorePosts();
  }, [next, limit, order]);

  const handleLoadMore = () => {
    setQuery('');
    setNext(next + Number(limit));
  }

  return (
    <BlogProvider>
      <div className="uk-main">
        <Header />
        <div className="uk-section">
          <div className="uk-container">
            <NavBar
              setIsSearching={setIsSearching}
              isSearching={isSearching}
              setQuery={setQuery}
              setOrder={setOrder}
              setLimit={setLimit}
              viewGrid={viewGrid}
              viewList={viewList}
              setViewGrid={setViewGrid}
              setViewList={setViewList}
            />
            {
              viewGrid 
              ? <PostsGridPage posts={posts} /> 
              : <PostsListPage posts={posts} />
            }
            <LoadMore
              handleLoadMore={handleLoadMore}
              isLoading={isLoading}
              setIsLoding={setIsLoding}
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
    </BlogProvider>
  );
}

export default App;
