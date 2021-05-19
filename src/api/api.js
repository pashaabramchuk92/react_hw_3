const fetcher = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
}

const getData = async (url, page, limit) => {
  return await fetcher(`${url}?_page=${page}&_limit=${limit}`);
}

const searchData = async (url, query) => {
  return await fetcher(`${url}?q=${query}`)
}

export {
  getData,
  searchData,
}