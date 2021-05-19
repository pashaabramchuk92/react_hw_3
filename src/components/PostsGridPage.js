import PostGridView from "./PostGridView"

const PostsGridPage = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {posts.map(post => (
        <PostGridView
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default PostsGridPage;