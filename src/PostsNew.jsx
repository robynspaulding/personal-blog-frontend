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
    <div id="post-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
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
