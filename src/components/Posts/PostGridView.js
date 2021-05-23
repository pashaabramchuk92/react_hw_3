import { useEffect, useState } from "react";
import { useBlog } from "../../BlogContext";

const PostGridView = ({ post }) => {

  const {
    setContextIsLike,
    saveLikedPost,
    deleteLikedPost,
    getLikedPost,
    contextIsLike
  } = useBlog();

  const [isLike, setIsLike] = useState(contextIsLike);

  useEffect(() => {
    setIsLike(post.title === getLikedPost(post.id));
  }, [isLike, contextIsLike, getLikedPost, post.id, post.title]);
  
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {`${post.title.slice(0, 6)}...`}
            <a
              href="/"
              className="uk-icon-link"
              uk-icon="heart"
              style={{'cursor': 'pointer', color: isLike ? 'red' : ''}}
              onClick={(e) => {
                e.preventDefault();
                saveLikedPost(post.id, post.title);
                setIsLike(true);
                setContextIsLike(true);

                if(isLike) {
                  setIsLike(false);
                  setContextIsLike(false);
                  deleteLikedPost(post.id);
                }
              }}
            > </a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>{`${post.body.slice(0, 100)}...`}</p>
        </div>
        <div className="uk-card-footer">
          <a
            href="/"
            className="uk-button uk-button-text"
            onClick={e => e.preventDefault()}  
          >Read more</a>
        </div>
      </div>
    </div>
  )
}

export default PostGridView;