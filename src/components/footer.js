import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <p id={styles.copyright}>
        <FaCopyright />
        2021<span id={styles.highlighted}>Tragency</span>
      </p>
      <section id={styles.middleContainer}>
        <img src={Logo} alt="Logo Of Tragency" className="logo" />
        <section id={styles.linkContainer}>
          <Link to="" className={styles.link}>
            Home
          </Link>
          <Link to="" className={styles.link}>
            Team
          </Link>
          <Link to="" className={styles.link}>
            Why Us?
          </Link>
          <Link to="" className={styles.link}>
            Contact
          </Link>
        </section>
      </section>
      <section id={styles.links}>
        <Link to="">
          <FaFacebook />
        </Link>
        <Link to="">
          <FaInstagram />
        </Link>
        <Link to="">
          <FaLinkedin />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
