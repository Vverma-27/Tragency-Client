import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaBook,
  FaCameraRetro,
  FaCommentDots,
  FaPlusSquare,
  FaUser,
  FaVideo,
} from "react-icons/fa";
// import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Post from "./post";
import Sidebar from "./sidebar";
import TopSearches from "./topSearches";
import useQuery from "./useQuery";

import Diary from "./diaryExtract";
import { getPosts, getInfinitePosts, postsLoading } from "../actions";
import Menu from "./menu";

const Feed = ({
  getPosts,
  getInfinitePosts,
  postsLoading,
  posts: { posts, loading, hasMore },
  user,
}) => {
  const [page, setPage] = useState(1);
  const observer = useRef();
  const isLoggedin = localStorage.getItem("isAuthenticated") === "true";
  const query = useQuery();
  const t = !query.get("type") ? "images" : query.get("type");
  const postCallbackRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            postsLoading();
            // console.log(entries[0].target);
            getInfinitePosts(t, "", page + 1);
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
    [loading, hasMore, getInfinitePosts, page, t, postsLoading]
  );
  useEffect(() => {
    setPage(1);
    getPosts(t);
  }, [t, getPosts, setPage]);
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
        )) || (
          <section key={i}>
            <Post t={t} post={post} />
          </section>
        )
  );
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
  return (
    <main
      class="main
    "
    >
      {window.innerWidth > 790 ? <Sidebar /> : <Menu />}
      <section class="out_container">
        <section class="container">
          <p class="heading_main" style={{ textTransform: "capitalize" }}>
            Have Something on Your mind
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
          <br />
          <p class="note">
            To change feed type, please select option from sidebar
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
                <FaVideo /> Post Vlogs
              </h2>
            </Link>
            <Link to="post?type=blogs">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaPlusSquare /> Post Blogs
              </h2>
            </Link>
            {window.innerWidth < 790 && isLoggedin && (
              <Link to={`/profile/${user}`}>
                <h2
                  class="sub-headings"
                  style={{
                    textTransform: "capitalize",
                    color: "rgba(108, 99, 255, 1)",
                  }}
                >
                  <FaUser />
                  Profile Page
                </h2>
              </Link>
            )}
            <Link to="/diary">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaBook /> Edit Diary
              </h2>
            </Link>
            <Link to="/chat">
              <h2 class="sub-headings" style={{ textTransform: "capitalize" }}>
                <FaCommentDots /> Tragency Town
              </h2>
            </Link>
          </section>
        </section>
        {renderedPosts}
      </section>
      {window.innerWidth > 790 ? renderedComponents : ""}
    </main>
  );
};

const mapStateToProps = ({ posts, auth }) => {
  // console.log(posts);
  return { posts, user: auth.user._id };
};

export default connect(mapStateToProps, {
  getPosts,
  getInfinitePosts,
  postsLoading,
})(Feed);
