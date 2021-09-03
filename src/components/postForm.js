import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styles from "../styles/Post.module.css";

const PostForm = () => {
  const [type, setType] = useState("image");
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [tags, setTags] = useState("");
  const [blog, setBlog] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(type, file, caption, country, region, tags, blog);
  };
  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      // console.log(text);
      setBlog(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  const renderedBlog = () => {
    if (type === "blog")
      return (
        <>
          OR
          <br />
          <section class={styles.field}>
            <label
              htmlFor="blog"
              class="note"
              style={{ fontSize: "1.5rem", marginRight: "2rem" }}
            >
              Write out or edit your blog:
            </label>
            <br />
            <textarea
              name="blog"
              class={styles.input}
              cols="50"
              rows="40"
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
              style={{ padding: "1vh 1vw", width: "40vw" }}
            ></textarea>
          </section>
        </>
      );
  };
  return (
    <form id={styles.form} onSubmit={onSubmit}>
      <section class={styles.field}>
        <label
          htmlFor="type"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          Type Of Post:
        </label>
        <select
          name="type"
          class={styles.input}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="image">Image</option>
          <option value="blog">Blog</option>
          <option value="vlog">Vlog</option>
        </select>
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
          Upload {type}:
        </label>
        <section>
          <FaImage />{" "}
          {!file ? `No ${type[0].toUpperCase() + type.substr(1)} Chosen` : file}
        </section>
        <input
          name="file"
          type="file"
          id={styles.file}
          class={styles.input}
          accept={
            type === "image"
              ? "image/png, image/jpeg"
              : type === "blog"
              ? ".txt"
              : "video/mp4"
          }
          value={file}
          onChange={(e) => {
            setFile(e.target.value);
            if (type === "blog") showFile(e);
          }}
        />
      </section>
      {renderedBlog()}
      <section class={styles.field}>
        <label
          htmlFor="caption"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          {type === "image" ? "Caption" : "Title"}:
        </label>
        <br />
        <textarea
          name="caption"
          class={styles.input}
          cols="30"
          rows="3"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
      </section>
      <section class={styles.field}>
        <label
          htmlFor="tags"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          Traveltags:
        </label>
        <br />
        <textarea
          name="tags"
          class={styles.input}
          cols="30"
          rows="5"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        ></textarea>
      </section>
      <section class={styles.field}>
        <label class="note" style={{ fontSize: "1.5rem", marginRight: "2rem" }}>
          Location:
        </label>
        <br />
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)}
        />{" "}
        &nbsp;&nbsp;
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </section>

      <button type="submit" class={styles.button}>
        submit
      </button>
    </form>
  );
};

export default PostForm;
