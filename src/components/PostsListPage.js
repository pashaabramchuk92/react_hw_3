import PostListView from "../components/PostListView"

const PostsListPage = ({ posts, setLikePosts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {posts.map(post => (
        <PostListView
          key={post.id}
          post={post}
          setLikePosts={setLikePosts}
        />
      ))}
    </div>
  )
}

export default PostsListPage;