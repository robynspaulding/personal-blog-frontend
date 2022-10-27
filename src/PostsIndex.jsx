import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      Search Posts: <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} alt="" />
            <p>Date: {post.date}</p>
            <button onClick={() => props.onSelectPost(post)}>More info</button>
          </div>
        ))}
    </div>
  );
}
