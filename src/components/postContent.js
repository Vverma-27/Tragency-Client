import React from "react";
import PostForm from "./postForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "../styles/Post.module.css";

const PostContent = () => {
  return (
    <section style={{ width: "95%", margin: "2rem auto" }}>
      <ToastContainer></ToastContainer>
      <section className={`container ${styles.container}`}>
        {/* <Sidebar /> */}
        <h1 class={styles.heading}>Post Cool Content</h1>
        <PostForm />
      </section>
    </section>
  );
};

export default PostContent;
