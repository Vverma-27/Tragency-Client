import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo_2.png";
import styles from "../styles/Coming.module.css";

const Coming = () => {
  return (
    <section class={styles.container}>
      <img src={Logo} alt="Logo" id={styles.logo} />
      <h1 id={styles.heading}>Coming Soon</h1>
      <form id={styles.notifyContainer}>
        <input type="email" placeholder="Enter Your Email" />
        <button type="submit">Notify me</button>
      </form>
      <br />
      <Link to="/feed">
        <button id={styles.back}>Back to Civilization</button>
      </Link>
    </section>
  );
};

export default Coming;
