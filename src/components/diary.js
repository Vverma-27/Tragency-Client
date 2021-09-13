import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "../styles/Diary.module.css";

const MainDiary = () => {
  const [diary, setDiary] = useState();
  const [title, setTitle] = useState("Enter Your Title");
  const [file, setFile] = useState("");
  const [date, setDate] = useState();
  const showFile = async (e) => {
    e.preventDefault();
    if (!e.target.files) return;
    if (e.target.files[0].name.split(".")[1] === "docx") {
      toast.warn("Cannot Read contents of word file");
      return;
    }
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      // console.log(text);
      setDiary(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  return (
    <section
      id={styles.container}
      style={{
        width: "95%",
        margin: "2rem auto",
        boxSizing: "border-box",
        padding: "2vh 4vw",
      }}
    >
      <ToastContainer></ToastContainer>
      <br />
      <br />
      <section class={styles.field} id={styles.fieldFile}>
        <label
          htmlFor="file"
          class="note"
          style={{
            fontSize: "1.5rem",
            marginRight: "2rem",
            textTransform: "capitalize",
          }}
        >
          Upload Diary:
        </label>
        <section>
          <FaBook />
          {!file ? "No File Chosen" : file}
        </section>
        <input
          name="file"
          type="file"
          id={styles.file}
          class={styles.input}
          accept=".txt, .docx"
          value={file}
          onChange={(e) => {
            setFile(e.target.value);
            showFile(e);
          }}
        />
      </section>
      <br />
      <br />
      Or <br /> Fill Your Diary Below
      <form onSubmit={() => console.log(diary)}>
        <input
          class={styles.heading}
          type="text"
          style={{ border: "none" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          className="note"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            fontSize: "1.8rem",
            marginTop: "-2rem",
            fontFamily: `"Patrick Hand", cursive`,
          }}
        />
        <br />
        <hr />
        <textarea
          className="note"
          cols="30"
          rows="30"
          style={{
            fontSize: "2.2rem",
            lineHeight: "5.4rem",
            width: "100%",
            border: "none",
            fontFamily: `"Patrick Hand", cursive`,
          }}
          placeholder="Your diary starts here"
          value={diary}
          onChange={(e) => setDiary(e.target.value)}
        ></textarea>
        <button type="submit" class={styles.button}>
          save
        </button>
      </form>
    </section>
  );
};

export default MainDiary;
