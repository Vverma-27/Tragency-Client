import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  USER_LOADED,
  USER_LOAD_FAIL,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_SUCCESS,
} from "../actions/types";
const initialState = {
  isAuthenticated: false,
  loading: true,
  user: {},
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //   console.log(payload);
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        ...payload,
        isAuthenticated: payload.user ? true : false,
        loading: false,
      };
    case USER_LOAD_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        loading: false,
      };
    case USER_LOGOUT_FAIL:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
