import ReactDOM from "react-dom";
import React from "react";
import Carousel from "./carousel";
import { FaTimes } from "react-icons/fa";

const PostModal = ({ post, t, setActive }) => {
  const renderedPost = () => {
    switch (t) {
      case "images":
        return (
          <section
            style={{
              background: "white",
              padding: "2vh 2vw",
              borderRadius: "1rem",
            }}
          >
            <Carousel images={post.content} />
            <p className="sub-headings">{post.title}</p>
          </section>
        );
      case "blogs":
        // console.log(t);
        return (
          <section
            style={{
              background: "white",
              padding: "2vh 2vw",
              borderRadius: "1rem",
            }}
          >
            <p
              className="sub-headings"
              style={{
                fontSize: "1.3rem",
                lineHeight: "3rem",
                whiteSpace: "break-spaces",
              }}
            >
              <span className="heading_main">{post.title}</span> <br />
              {post.content}
            </p>
          </section>
        );
      case "vlogs":
        return (
          <section
            style={{
              background: "white",
              padding: "2vh 2vw",
              borderRadius: "1rem",
            }}
          >
            <video
              src={post.content}
              controls="controls"
              class="post-media"
              autoPlay={true}
            />
            <p className="sub-headings">{post.title}</p>
          </section>
        );
      default:
        return;
    }
  };
  return ReactDOM.createPortal(
    <section
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        background: "rgba(0,0,0,0.4)",
        zIndex: "20",
      }}
      className="modal-wrapper"
      onClick={(e) => {
        if (e.target.classList.contains("modal-wrapper")) setActive(true);
      }}
    >
      <i
        style={
          t !== "blogs"
            ? {
                position: "fixed",
                top: "5vh",
                right: "8vw",
                fontSize: "6rem",
                color: "white",
              }
            : {
                position: "fixed",
                top: "2vh",
                right: "2vw",
                fontSize: "6rem",
                color: "white",
              }
        }
        className="icon"
        onClick={() => {
          setActive(true);
        }}
      >
        {" "}
        <FaTimes />
      </i>
      <br />
      <section
        style={
          t !== "blogs"
            ? {
                position: "fixed",
                top: "50%",
                left: "50%",
                height: "50%",
                transform: "translate(-50%,-50%)",
                width: "50%",
              }
            : {
                position: "fixed",
                top: "2vh",
                left: "2vw",
                // height: "8",
                // transform: "translate(-50%,-50%)",
                width: "90%",
              }
        }
      >
        {renderedPost()}
      </section>
    </section>,
    document.querySelector("#modal")
  );
};
export default PostModal;
