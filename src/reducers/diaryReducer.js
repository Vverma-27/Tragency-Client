import { LOAD_DIARY, UPDATE_DIARY } from "../actions/types";
const initialState = {};

const diaryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DIARY:
      return { ...state, diary: payload.diary };
    case UPDATE_DIARY:
      return { ...state, diary: payload.diary };
    default:
      return state;
  }
};
export default diaryReducer;
