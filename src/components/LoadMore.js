const LoadMore = ({ handleLoadMore }) => {
  return (
    <div class="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={() => handleLoadMore()}
      >Load more 
        <div class="uk-margin-small-left" uk-spinner="ratio: 0.6"></div>
      </button>
    </div>
  )
}

export default LoadMore;