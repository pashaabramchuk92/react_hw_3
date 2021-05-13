const PageList = ({ countPages, page, setPage }) => {
  const maxPages = [];
  for (let i = 0; i < countPages; i++) {
    maxPages.push(i);
  }

  return (
    <ul class="uk-pagination uk-flex-center uk-flex-middle" uk-margin>
      <li>
        <a
          href="/"
          disabled={false}
          onClick={(e) => {
            e.preventDefault();
            setPage(page - 1);
          }}
        ><span className="uk-icon uk-pagination-previous">
          <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" data-svg="pagination-previous">
            <polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"></polyline>
          </svg>
        </span></a>
      </li>
      {maxPages.map(x => {
        const curr = page;
        if(curr === x + 1) {
          return <li class="uk-active"><span>{x + 1}</span></li>
        }
        return (
          <li key={x}>
            <a
              href="/"
              value={x + 1}
              onClick={(e) => {
                e.preventDefault();
                setPage(e.target.getAttribute('value'));
              }}
            >{x + 1}</a>
          </li>
        )
      })}
      <li>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
        ><span className="uk-icon uk-pagination-next">
          <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" data-svg="pagination-next">
            <polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"></polyline>
          </svg>
        </span></a>
      </li>
    </ul>
  )
}

export default PageList;