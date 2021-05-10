import { useEffect, useState } from "react";

import { getData, getFullData, filterPosts } from './api/api';
import SearchBar from "./components/SearchBar";
import Temp from "./components/temp";


const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = filterPosts(posts, searchQuery);

  useEffect(() => {
    getFullData(BASE_URL).then(post => setAllPosts(post))
  }, []);
  
  useEffect(() => {
    getData(BASE_URL, page, limit).then(post => setPosts(post));
  }, [page, limit]);
  
  return (
    <div className="uk-main">
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
        {filteredPosts.map(post => (
          <Temp
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
