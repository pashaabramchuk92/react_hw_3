import PostListView from "../components/PostListView"

const PostsListPage = ({
  posts,
  saveLikePost,
  deleteLikePost,
  getLikedPosts,
  setLikedPosts
}) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {posts.map(post => (
        <PostListView
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

export default PostsListPage;