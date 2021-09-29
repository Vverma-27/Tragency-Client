import React, { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { loadDiary, updateDiary } from "../actions";
import styles from "../styles/Diary.module.css";

const MainDiary = () => {
  const daysDiary = useSelector(({ diary }) => diary);
  const dispatch = useDispatch();
  const getDiary = (date) => dispatch(loadDiary(date));
  const uploadDiary = (diary) => dispatch(updateDiary(diary));
  const [diary, setDiary] = useState(daysDiary.content || "");
  const [title, setTitle] = useState(
    daysDiary.title || "Enter Your Title Here"
  );
  const [file, setFile] = useState("");
  const [date, setDate] = useState(daysDiary.published || "");
  useEffect(() => {
    setDiary(daysDiary.content || "");
    setTitle(daysDiary.title || "Enter Your Title Here");
    setDate(daysDiary.published || "");
  }, [daysDiary]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const diaryobj = { content: diary, published: date, title };
    console.log(diaryobj);
    uploadDiary(diaryobj);
  };
  const showFile = async (e) => {
    e.preventDefault();
    if (!e.target.files) return;
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
          accept=".txt"
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
          required={true}
        />{" "}
        <br />
        <input
          className="note"
          type="date"
          value={date}
          onChange={(e) => {
            getDiary(e.target.value);
            setDate(e.target.value);
          }}
          style={{
            fontSize: "1.8rem",
            marginTop: "-2rem",
            fontFamily: `"Patrick Hand", cursive`,
          }}
          required={true}
        />
        <br />
        <hr />
        <textarea
          className="note diaryArea"
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
          required={true}
          onChange={(e) => setDiary(e.target.value)}
        ></textarea>
        <button type="submit" class={styles.button} onClick={handleSubmit}>
          save
        </button>
      </form>
    </section>
  );
};

export default MainDiary;
