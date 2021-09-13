import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
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
          <a
            target="_blank"
            href="https://tragency.github.io/Tragency/"
            className={styles.link}
          >
            Home
          </a>
          <a
            target="_blank"
            href="https://tragency.github.io/Tragency#team"
            className={styles.link}
          >
            Team
          </a>
          <a
            target="_blank"
            href="https://tragency.github.io/Tragency#why-us"
            className={styles.link}
          >
            Why Us?
          </a>
          <a
            target="_blank"
            href="https://tragency.github.io/Tragency#contact"
            className={styles.link}
          >
            Contact
          </a>
        </section>
      </section>
      <section id={styles.links}>
        <a target="_blank" href="https://www.facebook.com/Tragencytravels/">
          <FaFacebook />
        </a>
        <a target="_blank" href="http://instagram.com/tragency_travels">
          <FaInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/tragency-travel"
        >
          <FaLinkedin />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
