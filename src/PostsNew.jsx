export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create Post");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="post-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          user_id: <input type="text" name="user_id" />
        </div>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Date: <input type="text" name="date" />
        </div>
        <div>
          Body: <input type="text" name="body" />
        </div>
        <div>
          Image Url: <input type="text" name="image" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
