import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createRoom, setAlert } from "../actions";
import styles from "../styles/Post.module.css";

const RoomForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [imagePath, setImagePath] = useState("");
  const [maxLimit, setMaxLimit] = useState(20);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const formRoom = (formValues) => {
    dispatch(createRoom(formValues));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (maxLimit > 20)
      dispatch(setAlert("Max Limit cannot be above 20", "error"));
    const formValues = new FormData();
    formValues.append("title", title);
    formValues.append("maxLimit", maxLimit);
    formValues.append("description", description);
    formValues.append("file", image);
    formRoom(formValues);
  };
  return (
    <form id={styles.form} onSubmit={onSubmit} encType="multipart/form-data">
      <section class={styles.field}>
        <label
          htmlFor="title"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          Title
        </label>
        <br />
        <input
          name="title"
          class={styles.input}
          value={title}
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>

      <section class={styles.field}>
        <label
          htmlFor="maxLimit"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          Choose maximum number of users {"("}defaults to 20{")"}
        </label>
        <br />
        <input
          name="maxLimit"
          class={styles.input}
          value={maxLimit}
          max={20}
          type="number"
          onChange={(e) => setMaxLimit(e.target.value)}
        />
      </section>
      <section class={styles.field} id={styles.fieldFile}>
        <label
          htmlFor="file"
          class="note"
          style={{
            fontSize: "1.5rem",
            marginRight: "2rem",
            textTransform: "capitalize",
          }}
        >
          Upload Group image:
        </label>
        <section
          style={{
            top: "1vh",
            left: "16vw",
          }}
        >
          <FaImage />
          {!imagePath ? `No Image Chosen` : imagePath}
        </section>
        <input
          required={true}
          name="file"
          type="file"
          id={styles.file}
          class={styles.input}
          accept={"image/png, image/jpeg"}
          value={imagePath}
          onChange={(e) => {
            setImagePath(e.target.value);
            // console.log(e.target.files);
            setImage(e.target.files[0]);
          }}
        />
      </section>
      <section class={styles.field}>
        <label
          htmlFor="description"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          Description
        </label>
        <br />
        <textarea
          required={true}
          name="description"
          placeholder="A chat room to create awareness about destinations in Goa"
          class={`desc ${styles.input}`}
          cols="30"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </section>

      <button type="submit" class={styles.button}>
        Create Room
      </button>
    </form>
  );
};

export default RoomForm;
