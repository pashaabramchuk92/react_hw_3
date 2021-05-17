const PostGridView = ({ post }) => {


  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {`${post.title.slice(0, 6)}...`} {post.id}
                <a className="uk-icon-link" uk-icon="heart"></a>
              </h3>
          </div>
          <div className="uk-card-body">
              <p>{`${post.body.slice(0, 100)}...`}</p>
          </div>
          <div className="uk-card-footer">
              <a href="/" className="uk-button uk-button-text">Read more</a>
          </div>
      </div>
    </div>
  )
}

export default PostGridView;