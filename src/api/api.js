const getData = async (page, limit, order, query) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}?_page=${page}&_limit=${limit}&_sort=title&_order=${order}
    &title_like=${query}`);
  return await res.json();
}

const getTotalCount = async (page) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}?_page=${page}`);
  return res.headers.get('X-Total-Count');
}

const getMoreData = async (start, end, order) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}?_start=${start}&_end=${end}&_sort=title&_order=${order}`);
  return await res.json();
}

export {
  getData,
  getTotalCount,
  getMoreData,
}