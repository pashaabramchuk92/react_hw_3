import PostGridView from "../components/PostGridView"

const PostsGridPage = ({ serchedPost }) => {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {serchedPost.map(post => (
        <PostGridView
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default PostsGridPage;