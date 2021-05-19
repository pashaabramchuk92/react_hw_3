const fetcher = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
}

const getData = async (url, page, limit, order, query) => {
  return (
    await fetcher(
      `${url}?_page=${page}&_limit=${limit}
      &_sort=id&_order=${order}&q=${query}`)
    );
}

<<<<<<< HEAD
const searchData = async (url, query) => {
  return await fetcher(`${url}?q=${query}`)
}

export {
  getData,
  searchData,
=======
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
>>>>>>> e52f230be94ad8a0e6d149e241376ad80d92c868
}