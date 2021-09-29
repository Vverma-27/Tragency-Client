import React, { useRef } from "react";
import styles from "../styles/Profile.module.css";
import { FaCamera, FaImage, FaVideo, FaTh } from "react-icons/fa";
import image1 from "../images/image1.jpg";

const Profile = () => {
  const prevRef = useRef(null);
  const iconChangeHandler = (e) => {
    // console.log(e.target);
    let element = e.target;
    while (!element.classList.contains(`${styles.icon}`)) {
      element = element.parentElement;
    }
    const className = `${styles.active}`;
    prevRef.current.classList.remove(className);
    // console.log(prevRef.current.classList);
    element.classList.add(className);
    prevRef.current = element;
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
            ref={prevRef}
            onClickCapture={iconChangeHandler}
            className={`${styles.icon} ${styles.active}`}
          >
            <FaImage className={styles["image__icon"]} />
          </div>
          <div onClickCapture={iconChangeHandler} className={`${styles.icon}`}>
            <FaVideo className={styles["video__icon"]} />
          </div>

          <div onClickCapture={iconChangeHandler} className={`${styles.icon}`}>
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
