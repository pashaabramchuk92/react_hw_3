import PostListView from "../components/PostListView"

const PostsListPage = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {posts.map(post => (
        <PostListView
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default PostsListPage;