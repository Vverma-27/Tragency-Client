import React from "react";
import PostForm from "./postForm";
import Sidebar from "./sidebar";
import styles from "../styles/Post.module.css";

const PostContent = () => {
  return (
    <section className={`container ${styles.container}`}>
      <Sidebar />
      <h1 class={styles.heading}>Post Cool Content</h1>
      <PostForm />
    </section>
  );
};

export default PostContent;
