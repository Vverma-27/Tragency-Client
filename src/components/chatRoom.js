import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { io } from "socket.io-client";
import { loadRooms } from "../actions";
import styles from "../styles/ChatRoom.module.css";
import useQuery from "./useQuery";
import MessageInput from "./messageInput";
import Messages from "./messages";
import ChatInformation from "./chatInformation";

const ChatRoom = ({
  chatRooms,
  loadRooms,
  username,
  avatar,
  loggedInUserId,
}) => {
  const [socket, setSocket] = useState(null);
  const [active, setActive] = useState([]);
  const query = useQuery();
  const roomId = query.get("room");
  useEffect(() => {
    loadRooms();
    // console.log(ref);
    if (roomId) {
      const newSocket = io();
      setSocket(newSocket);
      newSocket.on("connect", () => {
        console.log("connected");
        newSocket.emit("joinRoom", {
          room: roomId,
          username,
          avatar,
          userId: loggedInUserId,
        });
      });
      newSocket.on("onlineUsers", (activeUsers) => setActive(activeUsers));
      // newSocket.on("connection");
      return () => {
        newSocket.close();
      };
    }
  }, [setSocket, loadRooms, roomId, loggedInUserId, username, avatar]);
  const renderedChatRooms = chatRooms.rooms.map((room) => (
    <>
      <Link to={`?room=${room._id}`}>
        <p
          className="sub-headings"
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          {room.title}
        </p>
      </Link>
      <hr style={{ width: "100%" }} />
      <br />
    </>
  ));
  const renderedActive = active.map((user) => (
    <>
      <Link to={`user/${user.userId}`}>
        <section style={{ position: "relative" }}>
          <img src={user.avatar} alt="Profile" className={`profile-photo`} />
          <p
            className="sub-headings"
            style={{ fontSize: "1rem", fontWeight: "600" }}
          >
            {user.username}
          </p>
        </section>
      </Link>
      <hr style={{ width: "100%" }} />
      <br />
    </>
  ));
  // console.log(ref);
  return (
    <section style={{ width: "95%", margin: "2vh auto" }}>
      <ToastContainer></ToastContainer>
      <section className={`container ${styles.container}`}>
        <section className={styles.sidebar}>
          <h1 className="heading_main">Chat Rooms</h1>
          {renderedChatRooms}
          <Link to="create/room">
            <button
              className="sub-headings"
              style={{
                fontSize: "1.3rem",
                background: "#000",
                color: "#fff",
                padding: "1vh 1vw",
                borderRadius: "1rem",
              }}
            >
              Create A Channel
            </button>
          </Link>
          <hr style={{ width: "100%" }} />
          <br />
        </section>
        {socket ? (
          <section className={styles.chatBox}>
            <ChatInformation />
            <Messages socket={socket} id={roomId} />
            <MessageInput socket={socket} id={roomId} />
          </section>
        ) : (
          <section className="container">Please Select a chat room</section>
        )}
        <section className={styles.sidebar}>
          <h1 className="heading_main">Online Users</h1>
          {renderedActive}
        </section>
      </section>
    </section>
  );
};

const mapStateToProps = (state) => ({
  chatRooms: state.chatRooms,
  username: state.auth.user.username,
  avatar: state.auth.user.avatar,
  loggedInUserId: state.auth.user._id,
});

export default connect(mapStateToProps, { loadRooms })(ChatRoom);
