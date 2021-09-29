import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import styles from "../styles/Post.module.css";

const RoomForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const [maxLimit, setMaxLimit] = useState("");
  const [description, setDescription] = useState("");
  //   const dispatch = useDispatch();
  //   const post = (formValues) => {
  //     // console.log(formValues);
  //     dispatch(uploadPost(formValues));
  //   };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(image);
    // const formData = new FormData();
    // formData.append("location", location);
    // formData.append("content", content);
    // formData.append("files", files);
    // formData.append("type", type);
    // formData.append("title", title);
    // formData.append("tags", travelTags);
    // post(formData);
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
        <section>
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
            setImage(...e.target.files[0]);
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
          placeholder="Ohh I had the best day today!"
          class={styles.input}
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
