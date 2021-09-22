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
  INFINITE_POSTS_LOAD_SUCCESS,
  INFINITE_POSTS_LOAD_FAIL,
  POSTS_LOADING,
  POSTS_REPORT_UPDATE_SUCCESS,
  POSTS_REPORT_UPDATE_FAIL,
} from "../actions/types";
const initialState = { posts: [], loading: true, hasMore: true };
const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOAD_SUCCESS:
      return {
        ...state,
        posts: payload.posts,
        loading: false,
        hasMore: true,
      };
    case POSTS_LOAD_FAIL:
      return {
        ...state,
        posts: [],
        loading: true,
        hasMore: false,
      };
    case POST_UPLOAD_SUCCESS:
      return { ...state, posts: [...state.posts, payload] };
    case POST_UPLOAD_FAIL:
      return { ...state };
    case POSTS_LIKE_UPDATE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
      };
    case POSTS_LIKE_UPDATE_FAIL:
      return { ...state };
    case POSTS_REPORT_UPDATE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, reports: payload.reports } : post
        ),
      };
    case POSTS_REPORT_UPDATE_FAIL:
      return { ...state };
    case POST_DELETE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? null : post
        ),
      };
    case POST_DELETE_FAIL:
      return { ...state };
    case POST_COMMENT_UPDATE_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id
            ? { ...post, comments: payload.comments }
            : post
        ),
      };
    case POST_COMMENT_UPDATE_FAIL:
      return { ...state };
    case INFINITE_POSTS_LOAD_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...payload.posts],
        loading: false,
        hasMore: true,
      };
    case INFINITE_POSTS_LOAD_FAIL:
      return { ...state, loading: true, hasMore: false };
    case POSTS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default postsReducer;
