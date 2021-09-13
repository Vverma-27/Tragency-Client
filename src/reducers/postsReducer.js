import {
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_FAIL,
  POST_UPLOAD_SUCCESS,
  POST_UPLOAD_FAIL,
  POSTS_LIKE_UPDATE_FAIL,
  POSTS_LIKE_UPDATE_SUCCESS,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_COMMENT_UPDATE_SUCCESS,
  POST_COMMENT_UPDATE_FAIL,
} from "../actions/types";
const initialState = { posts: [] };
const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOAD_SUCCESS:
      return { ...state, posts: payload };
    case POSTS_LOAD_FAIL:
      return { posts: [] };
    case POST_UPLOAD_SUCCESS:
      return { posts: [...state.posts, payload] };
    case POST_UPLOAD_FAIL:
      return { ...state };
    case POSTS_LIKE_UPDATE_SUCCESS:
      return {
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
      };
    case POSTS_LIKE_UPDATE_FAIL:
      return { ...state };
    case POST_DELETE_SUCCESS:
      return {
        posts: state.posts.map((post) =>
          post._id === payload.id ? null : post
        ),
      };
    case POST_DELETE_FAIL:
      return { ...state };
    case POST_COMMENT_UPDATE_SUCCESS:
      return {
        posts: state.posts.map((post) =>
          post._id === payload.id
            ? { ...post, comments: payload.comments }
            : post
        ),
      };
    case POST_COMMENT_UPDATE_FAIL:
      return { ...state };
    default:
      return state;
  }
};
export default postsReducer;
