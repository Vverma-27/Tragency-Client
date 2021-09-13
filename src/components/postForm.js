import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaImage, FaVideo, FaBook } from "react-icons/fa";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styles from "../styles/Post.module.css";
import useQuery from "./useQuery";
import { setAlert, uploadPost } from "../actions";

const PostForm = () => {
  const query = useQuery();
  const t = !query.get("type") ? "images" : query.get("type");
  const [type, setType] = useState(t);
  const [files, setFiles] = useState([]);
  const [filePath, setFilePath] = useState("");
  const [caption, setCaption] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [tags, setTags] = useState("");
  const [blog, setBlog] = useState("");
  const dispatch = useDispatch();
  const post = (formValues) => {
    // console.log(formValues);
    dispatch(uploadPost(formValues));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (files.length > 3) {
      dispatch(setAlert("Cannot upload more than 3 images", "error"));
      return;
    }
    console.log(files);
    const location = `${country}, ${region}`;
    const content =
      type === "blogs"
        ? blog
        : [
            "https://i.picsum.photos/id/338/536/354.jpg?hmac=GM18LpV1PFucRDBp1wYO81AR70GZk0ZfdXYJ6I9B9a4",
            "https://i.picsum.photos/id/338/536/354.jpg?hmac=GM18LpV1PFucRDBp1wYO81AR70GZk0ZfdXYJ6I9B9a4",
          ];
    // const formData = { location, content, title: caption, type, tags, files };
    const travelTags = tags
      .replaceAll("#", " ")
      .replaceAll("  ", " ")
      .replaceAll(" ", " #");
    const formData = new FormData();
    formData.append("location", location);
    formData.append("content", content);
    // formData.append("files", files);
    formData.append("type", type);
    formData.append("title", caption);
    formData.append("tags", travelTags);
    if (type !== "blogs")
      files.forEach((file) => formData.append("files", file));
    post(formData);
  };
  const showFile = async (e) => {
    e.preventDefault();
    if (!e.target.files) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      // console.log(text, blog);
      setBlog(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  const renderedBlog = () => {
    if (type === "blogs")
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
              required={true}
              name="blog"
              class={styles.input}
              cols="50"
              rows="60"
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
              style={{ padding: "1vh 1vw", width: "90%" }}
            ></textarea>
          </section>
        </>
      );
  };
  return (
    <form id={styles.form} onSubmit={onSubmit} encType="multipart/form-data">
      <section class={styles.field}>
        <label
          htmlFor="type"
          class="note"
          style={{ fontSize: "1.5rem", marginRight: "2rem" }}
        >
          Type Of Post:
        </label>
        <select
          required={true}
          name="type"
          class={styles.input}
          value={type}
          onChange={(e) => setType(e.target.value)}
          // defaultInputValue = {t}
          // defaultValue={{ label: t[0].toUpperCase() + t.substr(1), value: t }}
        >
          <option value="images">Image</option>
          <option value="blogs">Blog</option>
          <option value="vlogs">Vlog</option>
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
          {type === "images" ? (
            <FaImage />
          ) : type === "blogs" ? (
            <FaBook />
          ) : (
            <FaVideo />
          )}{" "}
          {!filePath
            ? `No ${type[0].toUpperCase() + type.substr(1)} Chosen`
            : filePath}
        </section>
        <input
          multiple={type === "images"}
          required={type !== "blogs"}
          name="file"
          type="file"
          id={styles.file}
          class={styles.input}
          accept={
            type === "images"
              ? "image/png, image/jpeg"
              : type === "blogs"
              ? ".txt"
              : "video/mp4"
          }
          value={filePath}
          onChange={(e) => {
            setFilePath(e.target.value);
            // console.log(e.target.files);
            setFiles([...e.target.files]);
            if (type === "blogs") showFile(e);
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
          {type === "images" ? "Caption" : "Title"}:
        </label>
        <br />
        <textarea
          required={true}
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
          required={true}
          value={country}
          onChange={(val) => setCountry(val)}
        />{" "}
        &nbsp;&nbsp;
        <RegionDropdown
          required={true}
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
