const fetcher = async (url) => {
  const resp = await fetch(url);
  console.log(resp);
  return await resp.json();
}

const getData = async (url, page, limit, order, query, start, end) => {
  return (
    await fetcher(
      `${url}?_page=${page}&_limit=${limit}
      &_sort=id&_order=${order}&q=${query}`)
    );
}

const getMoreData = async(url, start, end, order) => {
  return await fetcher(`${url}?_start=${start}&_end=${end}&_sort=id&_order=${order}`);
}

export {
  getData,
  getMoreData
}