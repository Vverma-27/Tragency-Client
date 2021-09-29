import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "../styles/Post.module.css";
import RoomForm from "./roomForm";

const CreateRoom = () => {
  return (
    <section style={{ width: "95%", margin: "2vh auto" }}>
      <ToastContainer></ToastContainer>
      <section className={`container ${styles.container}`}>
        {/* <Sidebar /> */}
        <h1 class={styles.heading}>Create new chat room</h1>
        <RoomForm />
      </section>
    </section>
  );
};

export default CreateRoom;
