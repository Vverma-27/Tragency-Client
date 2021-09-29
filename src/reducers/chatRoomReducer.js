import { LOAD_CHAT_ROOMS, LOAD_ROOM, POST_MESSAGE } from "../actions/types";
const initialState = { rooms: [], room: {} };
const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CHAT_ROOMS:
      return { ...state, rooms: payload.rooms };
    case LOAD_ROOM:
      return { ...state, room: payload.room };
    case POST_MESSAGE:
      return { ...state, room: payload.room };
    default:
      return state;
  }
};

export default alertReducer;
