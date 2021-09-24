import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/Coming.module.css";
import Comment from "./comment";
import { FaCommentMedical } from "react-icons/fa";
import { postComment } from "../actions";

const Comments = () => {
  // const [reload, setReload] = useState(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const addComment = (id) => {
    // console.log(id);
    dispatch(postComment(id, comment));
  };
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
        <br />
        <br />
        <section className="comment">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addComment(id);
              setComment("");
            }}
          >
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Add a new travelcussion"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              style={{
                border: "1px solid black",
                borderRadius: "0.3rem",
                width: "95%",
                height: "10vh",
              }}
            ></textarea>
            <button
              // className="note"
              type="submit"
              style={{
                fontSize: "1.4rem",
                padding: "2rem",
                background: "#3464ac",
                borderRadius: "1rem",
              }}
            >
              <FaCommentMedical />
              Add a new travelcussion
            </button>
          </form>
        </section>
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
        <section className="comment">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addComment(id);
              setComment("");
            }}
          >
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Add a new travelcussion"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              style={{
                border: "1px solid black",
                borderRadius: "0.3rem",
                width: "95%",
                height: "10vh",
              }}
            ></textarea>
            <button
              // className="note"
              type="submit"
              style={{
                fontSize: "1.4rem",
                padding: "2rem",
                background: "#3464ac",
                borderRadius: "1rem",
              }}
            >
              <FaCommentMedical />
              Add a new travelcussion
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Comments;
