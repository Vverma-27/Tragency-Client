import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import styles from "../styles/ChatRoom.module.css";
import { loadRoom } from "../actions";

const Messages = ({ socket, id, msgs = [], loadRoom, loggedInUserId }) => {
  const [messages, setMessages] = useState(msgs);
  const divRef = useRef(null);
  useEffect(() => setMessages(msgs), [msgs]);
  useEffect(() => divRef.current?.scrollIntoView({ behavior: "smooth" }));
  useEffect(() => {
    loadRoom(id);
    socket.on("chatMessage", (msg) => {
      setMessages((msgs) => [...msgs, msg]);
    });
  }, [socket, id, loadRoom]);
  const renderedMessages = messages.map((message, i) => (
    <>
      <section
        ref={i === messages.length - 1 ? divRef : null}
        key={i}
        className={`${styles.chat} ${
          message.user === loggedInUserId ? styles.loggedInMessage : ""
        }`}
      >
        <section className="post-info">
          <img
            src="https://s.gravatar.com/avatar/594d1832f6f8fa4f88f4d235846b6e02?s=200&r=pg&d=mp"
            alt="Profile "
            className="profile-photo"
          />
          <p className="heading_main" style={{ fontSize: "1.3rem" }}>
            {message.username}
            <br />
            <span className="note">
              {new Date(message.date).toLocaleString()}
            </span>
          </p>
        </section>
        <p className="heading_main" style={{ fontSize: "1.3rem" }}>
          {message.message}
        </p>
      </section>
      <hr style={{ width: "100%" }} />
      <br />
    </>
  ));
  return (
    <>
      <section
        className={styles.chats__container}
        style={{ height: "60vh", overflowY: "scroll", overflowX: "hidden" }}
      >
        {renderedMessages}
        {/* <div ref={divRef}></div> */}
      </section>
    </>
  );
};
const mapStateToProps = (state) => ({
  loggedInUserId: state.auth.user._id,
  msgs: state.chatRooms.room.messages,
});

export default connect(mapStateToProps, { loadRoom })(Messages);
