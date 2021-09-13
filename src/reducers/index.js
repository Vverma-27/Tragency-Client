import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import postReducer from "./postsReducer";

export default combineReducers({
  alerts: alertReducer,
  auth: authReducer,
  posts: postReducer,
});
