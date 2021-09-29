import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEqual } from "lodash";
import { FaPaperPlane } from "react-icons/fa";
import { sendMessage } from "../actions";

const MessageInput = ({ socket, id }) => {
  const [message, setMessage] = useState("");
  const username = useSelector((state) => state.auth.user.username, isEqual);
  const avatar = useSelector((state) => state.auth.user.avatar, isEqual);
  const loggedInUserId = useSelector((state) => state.auth.user._id, isEqual);
  const dispatch = useDispatch();
  // console.log(id);
  const postMessage = () =>
    dispatch(
      sendMessage({
        id,
        message,
        username,
        avatar,
        user: loggedInUserId,
        date: Date.now(),
      })
    );
  return (
    <form
      style={{
        width: "100%",
        display: " flex",
        justifyContent: " flex-start",
        alignItems: " center",
        padding: " 2vh 2vw",
        boxSizing: " border-box",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!message) return;
        socket.emit("chatMessage", {
          user: loggedInUserId,
          username,
          avatar,
          message,
          date: Date.now(),
        });
        setMessage("");
        postMessage();
      }}
    >
      <input
        name="message"
        id="message"
        autoComplete="off"
        placeholder="Send a new message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        style={{
          border: "1px solid black",
          borderRadius: "0.3rem",
          background: "#fff",
          width: "60%",
          height: "10vh",
        }}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <FaPaperPlane /> &nbsp;&nbsp;&nbsp; Send Message
      </button>
    </form>
  );
};

export default MessageInput;
