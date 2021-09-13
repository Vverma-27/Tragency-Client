import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./post";
import Sidebar from "./sidebar";
import TopSearches from "./topSearches";

import Diary from "./diaryExtract";
import useQuery from "./useQuery";
import { getPosts } from "../actions";

const Search = ({ getPosts, posts }) => {
  const query = useQuery();
  const q = query.get("query");
  const t = query.get("type");
  useEffect(() => {
    getPosts(t, q);
  }, [t, q, getPosts]);
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
  console.log(posts);
  const renderedPosts = posts.map((post) =>
    post === null ? "" : <Post key={post._id} t={t} post={post} />
  );
  return (
    <main class="main">
      <Sidebar />
      <section class="out_container">
        <section class="container">
          <p class="heading_main" style={{ textTransform: "capitalize" }}>
            Showing {t} for:
          </p>
          <a
            href="mailto:@vihaan.verma@tragency.in"
            className="sub-heading"
            style={{
              background: " #000",
              borderRadius: " 8px",
              fontSize: " 1.5rem",
              padding: " 1rem",
              color: " #fff",
              float: " right",
              marginTop: "0.7rem",
            }}
          >
            Report a bug
          </a>
          <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
            {q}
          </h2>
          <p class="note bottom">
            To change result type, please select option from sidebar
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

export default connect(mapStateToProps, { getPosts })(Search);
