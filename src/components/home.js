import React, { useEffect } from "react";
import { FaBook, FaCameraRetro, FaPlusSquare, FaVideo } from "react-icons/fa";
// import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Post from "./post";
import Sidebar from "./sidebar";
import TopSearches from "./topSearches";
import useQuery from "./useQuery";

import Diary from "./diaryExtract";
import { getPosts } from "../actions";

const Feed = ({ getPosts, posts }) => {
  const query = useQuery();
  const t = !query.get("type") ? "images" : query.get("type");
  useEffect(() => {
    getPosts(t);
  }, [t, getPosts]);
  const renderedComponents = (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Diary />
      <TopSearches />
    </section>
  );
  const renderedPosts = posts.map((post) =>
    post === null ? "" : <Post key={post._id} t={t} post={post} />
  );
  return (
    <main
      class="main
    "
    >
      <Sidebar />
      <section class="out_container">
        <section class="container">
          <p class="heading_main" style={{ textTransform: "capitalize" }}>
            Have Something on Your mind
          </p>
          <section
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link to="post?type=images">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaCameraRetro /> Post Images
              </h2>
            </Link>
            <Link to="post?type=vlogs">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaVideo /> Post a Vlog
              </h2>
            </Link>
            <Link to="post?type=blogs">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaPlusSquare /> Post a Blog
              </h2>
            </Link>
            <Link to="/diary">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaBook /> Edit Diary
              </h2>
            </Link>
          </section>
          <p class="note top">
            To change feed type, please select option from sidebar
          </p>
        </section>
        {renderedPosts}
      </section>
      {window.innerWidth > 790 ? renderedComponents : ""}
    </main>
  );
};

const mapStateToProps = ({ posts }) => {
  // console.log(posts);
  return { posts: posts.posts };
};

export default connect(mapStateToProps, { getPosts })(Feed);
