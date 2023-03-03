import axios from "axios";

export function PostsNew() {
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      const newPost = response.data;
      console.log("created post", newPost);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create Post");
    const params = new FormData(event.target);
    handleCreatePost(params);
    event.target.reset();
  };
  return (
    <div className="card-new" id="post-new">
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <></>
          <h1>New Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="card-body" class="form-group">
              Title: <input type="text" name="title" />
            </div>
            <div>
              Image Url: <input type="text" name="image" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Body:
              </label>
              <textarea input type="text" name="body" class="form-control" id="text-body" rows="3"></textarea>
            </div>

            <button className="btn btn-outline-success" type="submit">
              Create Post
            </button>
          </form>
        </>
      )}
    </div>
  );
}
