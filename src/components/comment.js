import React, { useState } from "react";
import { FaCommentMedical, FaTrashAlt } from "react-icons/fa";
import { isEqual } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, postReply, setAlert } from "../actions";
import Reply from "./reply";

const Comment = ({ index, id }) => {
  const comment = useSelector(
    (state) =>
      state.posts.posts.filter((post) => post._id === id)[0].comments[index]
  );
  // console.log(comment);
  const [reply, setReply] = useState("");
  const [openReplies, setOpenReplies] = useState(false);
  const dispatch = useDispatch();
  const addReply = () => {
    dispatch(postReply(id, comment._id, `@${comment.username} ${reply}`));
  };
  const removeComment = () => {
    dispatch(deleteComment(id, comment._id));
  };
  const loggedInUserId = useSelector((state) => state.auth.user._id, isEqual);
  // console.log(loggedInUserId, comment.user);
  return (
    <>
      <section
        class="post container"
        style={{
          borderRadius: "1rem",
          padding: "2rem",
          border: "1px solid #000",
        }}
      >
        {comment.user === loggedInUserId ? (
          <i
            class="delete_button"
            onClick={() => {
              removeComment();
            }}
          >
            <FaTrashAlt />
          </i>
        ) : null}
        <section className="post-info">
          <img src={comment.avatar} alt="Profile " className="profile-photo" />
          <p className="heading_main" style={{ fontSize: "1.3rem" }}>
            {comment.username}
            <br />
            <span className="note">{`${new Date(
              comment.date
            ).toLocaleString()}`}</span>
          </p>
        </section>
        <p className="heading_main" style={{ fontSize: "1.3rem" }}>
          {comment.comment}
        </p>
        <br />
        {comment.replies.length > 0 ? (
          <>
            {openReplies ? (
              <>
                {comment.replies.map((reply, i) => (
                  <Reply
                    index={i}
                    id={id}
                    commentId={comment._id}
                    commentIndex={index}
                  />
                ))}
                <button
                  onClick={() => {
                    setOpenReplies(false);
                  }}
                >
                  Close Travelcussions
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setOpenReplies(true);
                }}
              >
                View All {comment.replies.length} travelcussions
              </button>
            )}
            <hr />
          </>
        ) : null}
        <section className="comment">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!reply)
                dispatch(setAlert("Comment Text cannot be empty", "error"));
              addReply();
              setReply("");
            }}
          >
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="1"
              placeholder="Reply to this travelcussion"
              value={reply}
              onChange={(e) => {
                setReply(e.target.value);
              }}
              style={{
                border: "1px solid black",
                borderRadius: "0.3rem",
                width: "100%",
              }}
            ></textarea>
            <br />
            <br />
            <button
              // className="note"
              type="submit"
              style={{
                fontSize: "1.1rem",
                padding: "1rem 2rem 2rem",
                background: "#3464ac",
                borderRadius: "1rem",
                height: "1.3rem",
              }}
            >
              <FaCommentMedical />
              Reply to this travelcussion
            </button>
          </form>
        </section>
      </section>
      <br />
      <br />
      <hr />
      <br />
      <br />
    </>
  );
};

export default Comment;
