import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Diary.module.css";

const Diary = () => {
  return (
    <aside id={styles.container} style={{ width: "12vw" }}>
      <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
        Your diary title
      </h2>
      <p className="note">Today's date</p>
      <hr />
      <p className="note" style={{ fontSize: "1.4rem" }}>
        Your Diary here
        <Link to="/diary">
          <span className="blue">...Read More</span>
        </Link>
      </p>
    </aside>
  );
};

export default Diary;
