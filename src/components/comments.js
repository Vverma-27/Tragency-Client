import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/Coming.module.css";
import Comment from "./comment";

const Comments = () => {
  const { id } = useParams();
  const comments = useSelector((state) =>
    state.posts.posts.length > 0
      ? state.posts.posts.filter((post) => post._id === id)[0].comments
      : []
  );
  // console.log(comments);
  const notFound = (
    <main class="main" style={{ margin: "0 auto", width: "80vw" }}>
      <section
        className="container"
        style={{ width: "100%", textAlign: "center" }}
      >
        <p class="heading_main" style={{ textTransform: "capitalize" }}>
          No Comments Found
        </p>
        <br />

        <Link to="/feed">
          <button id={styles.back}>Back to Civilization</button>
        </Link>
      </section>
    </main>
  );
  if (comments.length === 0) return notFound;
  const renderedComments = comments.map((comment, i) => (
    <Comment id={id} index={i} />
  ));
  // console.log(renderedComments);
  return (
    <main class="main" style={{ margin: "0 auto", width: "80vw" }}>
      <section className="container" style={{ width: "100%", padding: "2rem" }}>
        {renderedComments}
      </section>
    </main>
  );
};

export default Comments;
