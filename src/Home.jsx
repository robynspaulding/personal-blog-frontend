import { useState, useEffect } from "react";
import axios from "axios";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

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

  const handleUpdatePost = (id, params) => {
    axios.patch("http://localhost:3000/posts/" + id + ".json", params).then((response) => {
      const updatedPost = response.data;
      setCurrentPost(updatedPost);

      setPosts(
        posts.map((post) => {
          if (post.id === updatedPost.id) {
            return updatedPost;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete("http://localhost:3000/posts/" + post.id, +".json").then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostShowVisable} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
} 
