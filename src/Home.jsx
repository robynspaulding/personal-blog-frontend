import { useState, useEffect } from "react";
import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostsNew } from "./PostsNew";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostShowVisable, setIsPostShowVisable] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostShowVisable(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostShowVisable(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      const newPost = response.data;
      setPosts([...posts, newPost]);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <Signup />
      <Login />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostShowVisable} onClose={handleHidePost}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
