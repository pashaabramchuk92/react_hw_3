const Post = ({ post }) => {

  const shortTitle = post.title.length > 6 ? `${post.title.slice(0, 6)}...` : post.title;
  const shortBody = post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body;

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {shortTitle} {post.id}
                <a className="uk-icon-link" uk-icon="heart"></a>
              </h3>
          </div>
          <div className="uk-card-body">
              <p>{shortBody}</p>
          </div>
          <div className="uk-card-footer">
              <a href="post.html" className="uk-button uk-button-text">Read more</a>
          </div>
      </div>
    </div>
  )
}

export default Post;