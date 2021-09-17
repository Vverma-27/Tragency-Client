import React, { useEffect } from "react";
import {
  FaImage,
  FaPhotoVideo,
  FaShoppingCart,
  FaTh,
  FaVideo,
} from "react-icons/fa";
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../actions";
import useQuery from "./useQuery";
import styles from "../styles/Side.module.css";

const Sidebar = ({ loadUser, username, avatar }) => {
  const query = useQuery();
  const { url } = useRouteMatch();
  const q = !query.get("query") ? "Ladakh" : query.get("query");
  const t = !query.get("type") ? "images" : query.get("type");
  const history = useHistory();
  const active = (string) =>
    t ? (t.toLowerCase() === string ? "active" : "") : "";
  const handleClick = (url) => history.push(url);
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <aside id={styles.sidebar}>
      <section id={styles.user_info}>
        <img
          src={avatar}
          alt="Profile"
          className="profile-photo"
          style={{ margin: "0.5rem" }}
        />
        <p className="heading_main" style={{ fontSize: "1.1rem" }}>
          @{username}
        </p>
      </section>
      <section
        class={`${styles.parent} ${styles[active("images")]}`}
        onClick={() =>
          handleClick(
            `${url}${url === "/results" ? `?query=${q}&` : "?"}type=images`
          )
        }
      >
        <section class={`${styles.option} ${styles[active("images")]}`}>
          <FaImage /> Images
        </section>
      </section>
      <section
        class={`${styles.parent} ${styles[active("blogs")]}`}
        onClick={() =>
          handleClick(
            `${url}${url === "/results" ? `?query=${q}&` : "?"}type=blogs`
          )
        }
      >
        <section class={`${styles.option} ${styles[active("blogs")]}`}>
          <FaTh /> Blogs
        </section>
      </section>
      <section
        class={`${styles.parent} ${styles[active("vlogs")]}`}
        onClick={() =>
          handleClick(
            `${url}${url === "/results" ? `?query=${q}&` : "?"}type=vlogs`
          )
        }
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
const mapStateToProps = (state) => ({
  username: state.auth.user.username,
  avatar: state.auth.user.avatar,
});
export default connect(mapStateToProps, { loadUser })(Sidebar);
