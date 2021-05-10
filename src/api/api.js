const fetcher = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
}

const getFullData = async (url) => {
  return await fetcher(url);
}

const getData = async (url, page, limit) => {
  return await fetcher(`${url}?_page=${page}&_limit=${limit}`);
}

const filterPosts = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter((post) => {
    const postTitle = post.title.toLowerCase();
    return postTitle.includes(query);
  });
};


export {
  getData,
  getFullData,
  filterPosts
}