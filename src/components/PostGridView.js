import { useEffect, useState } from "react";

const PostGridView = ({
  post,
  saveLikePost,
  deleteLikePost,
  getLikedPosts,
  setLikedPosts
}) => {
  const [isLike, setIsLike] = useState(false);
  useEffect(()=> {
    setIsLike(post.title === getLikedPosts(post.id));

    const createLikedPostsArr = () => {
      const likedPostsArr = [];
      const keys = Object.keys(localStorage);

      for(const key of keys) {
        likedPostsArr.push({title: getLikedPosts(key), id: key});
      }

      return likedPostsArr;
    }
    setLikedPosts(post.title === getLikedPosts(post.id) 
    ? createLikedPostsArr
    : []);

  }, [isLike]);

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {`${post.title.slice(0, 6)}...`} {post.id}
                <a
                  href="/"
                  className="uk-icon-link"
                  uk-icon="heart"
                  style={{color: isLike ? 'red' : ''}}
                  onClick={(e) => {
                    e.preventDefault();

                    setIsLike(true);
                    saveLikePost(post.id, post.title);

                    if(isLike) {
                      setIsLike(false);
                      deleteLikePost(post.id);
                    }
                  }}
                >

                </a>
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