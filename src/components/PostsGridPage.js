import PostGridView from "../components/PostGridView"

const PostsGridPage = ({
  posts,
  saveLikePost,
  deleteLikePost,
  getLikedPosts,
  setLikedPosts
}) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map(post => (
        <PostGridView
          key={post.id}
          post={post}
          saveLikePost={saveLikePost}
          deleteLikePost={deleteLikePost}
          getLikedPosts={getLikedPosts}
          setLikedPosts={setLikedPosts}
        />
      ))}
    </div>
  )
}

export default PostsGridPage;