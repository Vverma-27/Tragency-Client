import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isEqual } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  FaComment,
  FaCommentMedical,
  FaGlobe,
  FaPlaneDeparture,
  // FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
import Carousel from "./carousel";
import { deletePost, likePost, unlikePost, postComment } from "../actions";
// import Image1 from "../images/image1.jpg";
// import video from "../videos/Video.mp4";

const Post = ({
  t,
  post,
  isLast,
  setPage,
  page,
  loading,
  getInfinitePosts,
  location,
}) => {
  // const [reload, setReload] = useState(false);
  const [comment, setComment] = useState("");
  const loggedInUserId = useSelector((state) => state.auth.user._id, isEqual);
  // console.log(loggedInUserId);
  const dispatch = useDispatch();
  if (post.content.length === 0) return null;
  const liked =
    post.likes.filter((like) => like.user.toString() === loggedInUserId)
      .length > 0;
  const updateLikes = (id) => {
    if (!liked) dispatch(likePost(id));
    else dispatch(unlikePost(id));
  };
  const addComment = (id) => {
    // console.log(id);
    dispatch(postComment(id, comment));
  };
  const removePost = (id) => {
    dispatch(deletePost(id));
    if (isLast && !loading) {
      getInfinitePosts(t, location, page + 1);
      setPage(page + 1);
    }
  };
  // console.log(post.likes);
  // console.log(post.user.username + " " + post.user.avatar);
  const renderedPost = () => {
    switch (t) {
      case "images":
        return <Carousel images={post.content} />;
      case "blogs":
        // console.log(t);
        return (
          <p
            className="sub-headings"
            style={{ fontSize: "1.3rem", lineHeight: "3rem" }}
          >
            {post.content}
          </p>
        );
      case "vlogs":
        return (
          <video src={post.content} controls="controls" class="post-media" />
        );
      default:
        return;
    }
  };
  return (
    <section class="post container">
      {post.user._id === loggedInUserId ? (
        <i
          class="delete_button"
          onClick={() => {
            removePost(post._id);
          }}
        >
          <FaTrashAlt />
        </i>
      ) : null}
      <section className="post-info">
        <img src={post.user.avatar} alt="Profile" className="profile-photo" />
        <p className="heading_main" style={{ fontSize: "1.3rem" }}>
          {post.user.username}
          <br />
          <span className="note">{`${new Date(
            post.date
          ).toLocaleString()}`}</span>
        </p>
      </section>
      {t === "blogs" ? <p className="heading_main">{post.title}</p> : ""}
      <br />
      {renderedPost()}
      <section className="extras">
        <p
          className={`note ${liked ? "likes_active" : ""}`}
          style={{ fontSize: "1.4rem" }}
          onClick={() => {
            updateLikes(post._id);
            // setReload(!reload);
            // console.log(post._id);
          }}
        >
          <FaPlaneDeparture /> {post.likes.length} Travelups
        </p>
        <p className="note" style={{ fontSize: "1.4rem" }}>
          <Link to={`comments/${post._id}`}>
            {" "}
            <FaComment /> View All {post.comments.length} Travelcussions
          </Link>
        </p>
        <p className="note" style={{ fontSize: "1.4rem" }}>
          <FaGlobe /> {post.location},{" "}
          <Link to={`/results?query=${post.location}&type=images`}>
            <span class="blue" style={{ fontWeight: "300" }}>
              {" "}
              view posts related to {post.location}
            </span>
          </Link>
        </p>
      </section>
      <section className="comment">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(post._id);
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
      {t !== "blogs" ? <p className="sub-headings">{post.title}</p> : ""}
      <br />
      {<p className="sub-headings">TravelTags: {post.tags}</p>}
    </section>
  );
};

export default Post;
