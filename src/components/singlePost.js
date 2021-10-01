import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPost } from "../actions";
import history from "../history";
import PostModal from "./postModal";

const SinglePost = (props) => {
  const [active, setActive] = useState(false);
  if (active) history.push("/feed");
  console.log(active);
  const location = useLocation();
  const dispatch = useDispatch();
  const loadPost = useCallback(
    () => dispatch(getPost(location.pathname.split("/")[2])),
    [dispatch, location]
  );
  useEffect(() => {
    loadPost();
  }, [loadPost]);
  const post = useSelector((state) => state.posts.post);
  //   console.log(post);
  return <PostModal post={post} t={post.type} setActive={setActive} />;
};

export default SinglePost;
