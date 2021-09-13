import React, { useState } from "react";
import {
  FaCommentMedical,
  // FaDumpster,
  // FaTrash,
  FaTrashAlt,
} from "react-icons/fa";
// import { isEqual } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { deleteReply, postReply } from "../actions";

const Reply = ({ index, id, commentId, commentIndex }) => {
  const reply = useSelector(
    (state) =>
      state.posts.posts.filter((post) => post._id === id)[0].comments[
        commentIndex
      ].replies[index]
  );
  const [replyBody, setReplyBody] = useState("");
  const dispatch = useDispatch();
  const addReply = () => {
    dispatch(postReply(id, commentId, `@${reply.username} ${replyBody}`));
  };
  const removeReply = () => {
    dispatch(deleteReply(id, commentId, reply._id));
  };
  const loggedInUserId = useSelector((state) => state.auth.user._id);
  return (
    <section class="post container" style={{ marginLeft: "2vw" }}>
      {reply.user === loggedInUserId ? (
        <i
          class="delete_button"
          onClick={() => {
            removeReply();
          }}
        >
          <FaTrashAlt />
        </i>
      ) : null}
      <section className="post-info">
        <img src={reply.avatar} alt="Profile" className="profile-photo" />
        <p className="heading_main" style={{ fontSize: "1.3rem" }}>
          {reply.username}
          <br />
          <span className="note">{`${new Date(
            reply.date
          ).toLocaleString()}`}</span>
        </p>
      </section>
      <p className="heading_main" style={{ fontSize: "1.3rem" }}>
        {reply.reply}
      </p>
      <section className="comment">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addReply();
            setReplyBody("");
          }}
        >
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="1"
            placeholder="Reply to this travelcussion"
            value={replyBody}
            onChange={(e) => {
              setReplyBody(e.target.value);
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
      <hr />
    </section>
  );
};

export default Reply;
