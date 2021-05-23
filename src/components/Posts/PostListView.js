import { useEffect, useState } from "react";
import { useBlog } from "../../BlogContext";

const PostListView = ({ post }) => {

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
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container uk-first-column">
          <img src="https://picsum.photos/600/400" alt="" className="uk-cover" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div className="">
          <div className="uk-card-body">
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
            <p>
              {`${post.body.slice(0, 70)}...`}
            </p>
            <a
              href="/"
              className="uk-button uk-button-text"
              onClick={e => e.preventDefault()}
            >Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostListView;