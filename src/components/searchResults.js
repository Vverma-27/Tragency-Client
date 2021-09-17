import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Post from "./post";
import Sidebar from "./sidebar";
import TopSearches from "./topSearches";

import Diary from "./diaryExtract";
import useQuery from "./useQuery";
import { getPosts, getInfinitePosts, postsLoading } from "../actions";
import Menu from "./menu";

const Search = ({
  getPosts,
  getInfinitePosts,
  postsLoading,
  posts: { posts, loading, hasMore },
}) => {
  const [page, setPage] = useState(1);
  const observer = useRef();
  const query = useQuery();
  const q = query.get("query");
  const t = query.get("type");
  const postCallbackRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            postsLoading();
            // console.log(entries[0].target);
            getInfinitePosts(t, q, page + 1);
            setPage(page + 1);
          }
        },
        {
          root: null,
          threshold: 0.5,
          rootMargin: "0px",
        }
      );
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, getInfinitePosts, page, t, postsLoading, q]
  );
  useEffect(() => {
    setPage(1);
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
  const renderedPosts = posts.map((post, i) =>
    post === null
      ? null
      : (i + 1 === posts.length && (
          <section ref={postCallbackRef}>
            <Post
              key={i}
              t={t}
              post={post}
              isLast={true}
              setPage={setPage}
              page={page}
              loading={loading}
              getInfinitePosts={getInfinitePosts}
              location=""
            />
          </section>
        )) || <Post key={i} t={t} post={post} />
  );
  return (
    <main class="main">
      {window.innerWidth > 790 ? <Sidebar /> : <Menu />}
      <section class="out_container">
        <section class="container">
          <p class="heading_main" style={{ textTransform: "capitalize" }}>
            Showing {t} for:
          </p>
          <a
            href="mailto:vihaan.verma@tragency.in"
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
  return { posts };
};

export default connect(mapStateToProps, {
  getPosts,
  getInfinitePosts,
  postsLoading,
})(Search);
