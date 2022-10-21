export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h1>Post Info</h1>
      <img src={props.post.image} />
      <h3> {props.post.title}</h3>
      <p>{props.post.date}</p>
      <p>{props.post.body}</p>
    </div>
  );
}
