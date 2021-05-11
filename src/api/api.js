const fetcher = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
}

const getData = async (url, page, limit) => {
  return await fetcher(`${url}?_page=${page}&_limit=${limit}`);
}

const searchPost = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter((post) => {
    const postTitle = post.title.toLowerCase();
    return postTitle.includes(query);
  });
};

const filterPosts = (order, data) => {
  switch(order) {
    case 'asc':
      return data.sort((a, b) => a.id - b.id);
    case 'desc':
      return data.sort((a, b) => b.id - a.id);
  }      
}

const loadMore = async () => {
  
}

export {
  getData,
  searchPost,
  filterPosts,
  loadMore
}