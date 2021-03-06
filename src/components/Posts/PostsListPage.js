import PostListView from "./PostListView"

const PostsListPage = ({ posts }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {
        posts.length > 0
        ? posts?.map(post => <PostListView key={post.id} post={post} />)
        : <div className="uk-align-center">Sorry, posts not found :(</div>
      }
    </div>
  )
}

export default PostsListPage;