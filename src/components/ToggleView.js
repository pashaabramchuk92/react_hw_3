const ToggleView = ({ gridView, listView, handleToggleView }) => {
  const activeClassGrid = gridView ? 'uk-active' : '';
  const activeClassList = listView ? 'uk-active' : '';

  return (
    <div className="uk-button-group uk-margin-left">
      <button
        className={"uk-button uk-button-default" + activeClassGrid}
        onClick={handleToggleView}
      >
        <span uk-icon="icon:  grid"></span>
      </button>
      <button
        className={"uk-button uk-button-default" + activeClassList}
        // onClick={handleToggleView}
        onClick={handleToggleView}
      >
        <span uk-icon="icon:  list"></span>
      </button>
    </div>
  )
}

export default ToggleView;