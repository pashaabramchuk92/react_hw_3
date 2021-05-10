const Temp = ({ post }) => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {post.title} {post.id}<a href="/" className="uk-icon-link" uk-icon="heart"></a>
              </h3>
          </div>
          <div className="uk-card-body">
              <p>{post.body}</p>
          </div>
          <div className="uk-card-footer">
              <a href="post.html" className="uk-button uk-button-text">Read more</a>
          </div>
      </div>
    </div>
  )
}

export default Temp;