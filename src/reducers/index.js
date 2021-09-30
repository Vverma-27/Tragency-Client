import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import postReducer from "./postsReducer";
import chatRoomReducer from "./chatRoomReducer";
import diaryReducer from "./diaryReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  alerts: alertReducer,
  auth: authReducer,
  posts: postReducer,
  chatRooms: chatRoomReducer,
  diary: diaryReducer,
  profile: profileReducer,
});
