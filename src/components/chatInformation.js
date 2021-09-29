import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "../styles/ChatRoom.module.css";

const ChatInformation = () => {
  const room = useSelector((state) => state.chatRooms.room);
  return (
    <>
      <section className={styles.chatBox__headingContainer}>
        <section style={{ height: "100%", width: "100%" }}>
          <img
            src={room.profileImage}
            alt="Dp"
            className={`${styles.chatBox__image}`}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h1
            className="heading_main"
            style={{
              display: "inline-block",
              margin: "0",
              textTransform: "capitalize",
            }}
          >
            {room.title}
            <br />
            <p className="note" style={{ fontSize: "1rem" }}>
              {room.users?.length} members
            </p>
          </h1>
        </section>
        <section className={styles.usersContainer}>
          <img
            src={room.users ? room.users[0].avatar : ""}
            alt="Profile"
            className={`profile-photo ${styles.dp}`}
          />
          <img
            src={room.users ? room.users[1].avatar : ""}
            alt="Profile"
            className={`profile-photo ${styles.dp}`}
          />
          <img
            src={room.users ? room.users[2].avatar : ""}
            alt="Profile"
            className={`profile-photo ${styles.dp}`}
          />
          <Link>
            <p className="note blue" style={{ fontSize: "0.8rem" }}>
              See All Users...
            </p>
          </Link>
        </section>
      </section>
      <br />
      <br />
    </>
  );
};

export default ChatInformation;
