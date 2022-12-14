export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h1>Post Info</h1>
      <img src={props.post.image} />
      <h3> {props.post.title}</h3>
      <p>{props.post.date}</p>
      <p>{props.post.body}</p>

      <div>
        <button className="btn btn-info" onClick={handleClick}>
          Delete Post
        </button>
      </div>
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" defaultValue={props.post.title} />
        </div>
        <div>
          Date: <input type="text" name="date" defaultValue={props.post.date} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Body:
          </label>
          <textarea
            input
            type="text"
            name="body"
            class="form-control"
            id="text-body"
            defaultValue={props.post.body}
            rows="3"
          ></textarea>
        </div>
        <div>
          Image url: <input type="text" name="image" defaultValue={props.post.image} />
        </div>
        <button className="btn btn-info" type="submit">
          Update Post
        </button>
      </form>
    </div>
  );
}
