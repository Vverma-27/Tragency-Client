import React, { useState } from "react";
import styles from "../styles/Profile.module.css";
import { FaCamera, FaImage, FaVideo, FaTh } from "react-icons/fa";
import image1 from "../images/image1.jpg";

const Profile = () => {
  const [imgIconColor, setImgIconColor] = useState("");
  const [vidIconColor, setVidIconColor] = useState("");
  const [gridIconColor, setGridIconColor] = useState("");

  const imgIconChangeHandler = () => {
    setImgIconColor("active");
    setVidIconColor("");
    setGridIconColor("");
  };

  const vidIconChangeHandler = () => {
    setVidIconColor("active");
    setImgIconColor("");
    setGridIconColor("");
  };

  const gridIconChangeHandler = () => {
    setGridIconColor("active");
    setImgIconColor("");
    setVidIconColor("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} action="#">
        <label className={styles["userImg__label"]} htmlFor="name__input">
          <FaCamera className={styles["camera__icon"]} />
        </label>
        <input
          id="name__input"
          className={styles["userImg__input"]}
          type="file"
          accept="image/png, image/jpeg"
        />
        <input
          className={styles["userName__input"]}
          type="text"
          placeholder="name"
        />

        <textarea
          className={styles["userBio__input"]}
          name="Bio__input"
          cols="30"
          rows="10"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          repudiandae ratione nostrum velit doloremque blanditiis sit quos illum
          officia? Officiis adipisci voluptate odit corrupti impedit aperiam
          doloremque dolores hic quod magnam, quo, modi, animi non nihil beatae
          minus. Aspernatur cupiditate ullam numquam error deserunt.
          Reprehenderit neque animi atque nisi odio.
        </textarea>
        <button id={styles["update__btn"]} type="submit">
          Update profile
        </button>
      </form>
      <div className={styles["post__container"]}>
        <div className={styles["post__icon--box"]}>
          <div
            onClick={imgIconChangeHandler}
            className={`${styles.icon} ${styles[imgIconColor]}`}
          >
            <FaImage className={styles["image__icon"]} />
          </div>
          <div
            onClick={vidIconChangeHandler}
            className={`${styles.icon} ${styles[vidIconColor]}`}
          >
            <FaVideo className={styles["video__icon"]} />
          </div>

          <div
            onClick={gridIconChangeHandler}
            className={`${styles.icon} ${styles[gridIconColor]}`}
          >
            <FaTh className={styles["grid__icon"]} />
          </div>
        </div>

        <div className={styles["post__img--container"]}>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
          <div className={styles["post__img--box"]}>
            <img className={styles["post__img"]} src={image1} alt="post-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
