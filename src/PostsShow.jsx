export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h1>Post Info</h1>
      <img src={props.post.image} />
      <h3> {props.post.title}</h3>
      <p>{props.post.date}</p>
      <p>{props.post.body}</p>

      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" defaultValue={props.post.title} />
        </div>
        <div>
          Date: <input type="text" name="date" defaultValue={props.post.date} />
        </div>
        <div>
          Body: <input type="text" name="body" defaultValue={props.post.body} />
        </div>
        <div>
          Image url: <input type="text" name="image" defaultValue={props.post.image} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}
