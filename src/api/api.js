const fetcher = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
}

const getData = async (url, page, limit) => {
  return await fetcher(`${url}?_page=${page}&_limit=${limit}`);
}

const getMoreData = async(url, end) => {
  return await fetcher(`${url}?_start=0&_end=${end}`);
}

const getAllData = async(url) => {
  return await fetcher(url);
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

const toggleOrderData = (order, data) => {
  switch(order) {
    case 'asc':
      return data.sort((a, b) => a.id - b.id);
    case 'desc':
      return data.sort((a, b) => b.id - a.id);
    default:
      return
  }
}

// const deleteData = async (url, id) => {
//   const resp = await fetch(`${url}/${id}`, {
//     method: "DELETE",
//   });

//   return await resp.json();
// }

export {
  getData,
  getMoreData,
  getAllData,
  toggleOrderData,
  searchPost,
  // deleteData
}