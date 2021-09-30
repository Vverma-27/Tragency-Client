import { LOAD_DIARY, UPDATE_DIARY, ERROR_DIARY } from "../actions/types";
const initialState = {};

const diaryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DIARY:
      return payload.diary;
    case UPDATE_DIARY:
      return payload.diary;
    case ERROR_DIARY:
      return {};
    default:
      return state;
  }
};
export default diaryReducer;
