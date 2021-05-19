const fetcher = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
}

const getData = async (url, page, limit, order, query) => {
  return (
    await fetcher(
      `${url}?_page=${page}&_limit=${limit}
      &_sort=title&_order=${order}&q=${query}`)
    );
}

const getTotalCount = async (url, page) => {
  const resp = await fetch(`${url}?_page=${page}`);
  return resp.headers.get('X-Total-Count');
}

const getMoreData = async (url, start, end, order) => {
  return await fetcher(`${url}?_start=${start}&_end=${end}&_sort=id&_order=${order}`);
}
export {
  getData,
  getMoreData,
  getTotalCount
}