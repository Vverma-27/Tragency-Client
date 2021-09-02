import React from "react";
import {
  FaImage,
  FaPhotoVideo,
  FaShoppingCart,
  FaTh,
  FaVideo,
} from "react-icons/fa";
import Image1 from "../images/image1.jpg";
import styles from "../styles/Side.module.css";

const Sidebar = () => {
  return (
    <aside id={styles.sidebar}>
      <section id={styles.user_info}>
        <img src={Image1} alt="Profile image" className="profile-photo" />
        <p className="heading_main" style={{ fontSize: "1.1rem" }}>
          Vihaan Verma
          <br />
          <span className="note">@vihaan2707</span>
        </p>
      </section>
      <section>
        <section class={`${styles.parent} ${styles.active}`}>
          <section class={`${styles.option} ${styles.active}`}>
            <FaImage /> Images
          </section>
        </section>
        <section className={styles.parent}>
          <section class={styles.option}>
            <FaTh /> Blogs
          </section>
        </section>
        <section className={styles.parent}>
          <section class={styles.option}>
            <FaPhotoVideo /> Vlogs
          </section>
        </section>
        <section className={styles.parent}>
          <section class={styles.option}>
            <FaVideo /> Post Content
          </section>
        </section>
        <section className={styles.parent}>
          <section class={styles.option}>
            <FaShoppingCart /> Marketplace
          </section>
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
