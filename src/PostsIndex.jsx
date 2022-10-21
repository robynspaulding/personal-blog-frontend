export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Date: {post.date}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
