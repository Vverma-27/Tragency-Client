import React from "react";
import {
  FaImage,
  FaPhotoVideo,
  FaShoppingCart,
  FaTh,
  FaVideo,
} from "react-icons/fa";
import { useHistory, useRouteMatch } from "react-router-dom";
import useQuery from "./useQuery";
import Image1 from "../images/image1.jpg";
import styles from "../styles/Side.module.css";

const Sidebar = () => {
  const query = useQuery();
  const { url } = useRouteMatch();
  const q = !query.get("query") ? "Ladakh" : query.get("query");
  const t = query.get("type");
  const history = useHistory();
  const active = (string) =>
    t ? (t.toLowerCase() === string ? "active" : "") : "";
  const handleClick = (url) => history.push(url);
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
      <section
        class={`${styles.parent} ${styles[active("images")]}`}
        onClick={() => handleClick(`results?query=${q}&type=images`)}
      >
        <section class={`${styles.option} ${styles[active("images")]}`}>
          <FaImage /> Images
        </section>
      </section>
      <section
        class={`${styles.parent} ${styles[active("blogs")]}`}
        onClick={() => handleClick(`results?query=${q}&type=blogs`)}
      >
        <section class={`${styles.option} ${styles[active("blogs")]}`}>
          <FaTh /> Blogs
        </section>
      </section>
      <section
        class={`${styles.parent} ${styles[active("vlogs")]}`}
        onClick={() => handleClick(`results?query=${q}&type=vlogs`)}
      >
        <section class={`${styles.option} ${styles[active("vlogs")]}`}>
          <FaPhotoVideo /> Vlogs
        </section>
      </section>
      <section
        className={`${styles.parent} ${
          styles[url === "/post" ? "active" : ""]
        }`}
        onClick={() => handleClick(`/post`)}
      >
        <section
          class={`${styles.option} ${styles[url === "/post" ? "active" : ""]}`}
        >
          <FaVideo /> Post Content
        </section>
      </section>
      <section className={styles.parent} onClick={() => handleClick(`/market`)}>
        <section class={styles.option}>
          <FaShoppingCart /> Marketplace
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
