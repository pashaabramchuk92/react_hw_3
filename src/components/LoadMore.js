const LoadMore = ({ handleLoadMore, isLoadingMore, setIsLoadingMore }) => {
  return (
    <div class="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={() => {
          handleLoadMore();
        }}
      >Load more 
        <div
          class="uk-margin-small-left"
          uk-spinner="ratio: 0.6"
          style={{visibility: isLoadingMore ? 'hidden' : ''}}
        ></div>
      </button>
    </div>
  )
}

export default LoadMore;