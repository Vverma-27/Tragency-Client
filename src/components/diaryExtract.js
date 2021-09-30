import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadDiary } from "../actions";
import styles from "../styles/Diary.module.css";

const Diary = ({ diary, loadDiary }) => {
  useEffect(() => {
    loadDiary(new Date().toISOString().substr(0, 10));
  }, [loadDiary]);
  return (
    <aside id={styles.container} style={{ width: "12vw" }}>
      <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
        {diary.title || "Your diary title"}
      </h2>
      <p className="note">{new Date().toLocaleDateString()}</p>
      <hr />
      <p className="note" style={{ fontSize: "1.4rem" }}>
        {diary.content
          ? diary.content.split(" ").slice(0, 15).join(" ")
          : "Your Diary here"}
        <Link to="/diary">
          <span className="blue">...Read More</span>
        </Link>
      </p>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  diary: state.diary,
});

export default connect(mapStateToProps, { loadDiary })(Diary);
