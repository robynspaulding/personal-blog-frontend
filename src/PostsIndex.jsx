import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index" className="row">
      <h1>Posts</h1>
      Search Posts: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <p></p>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div className="card" style={{ width: "18rem" }} key={post.id}>
            <h2 className="card-title">{post.title}</h2>
            <img src={post.image} className="card-img-top" alt={post.title} />
            <p className="card-body"> Last updated on: {post.date}</p>
            <button className="btn btn-outline-dark" onClick={() => props.onSelectPost(post)}>
              Read Post
            </button>
          </div>
        ))}
    </div>
  );
}
