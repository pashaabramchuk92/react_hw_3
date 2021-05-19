import PostListView from "./PostListView"

const PostsListPage = ({ serchedPost }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {serchedPost.map(post => (
        <PostListView
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default PostsListPage;