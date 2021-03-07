// CONSTANTS
import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from "../types/auth";

const initialState = {
  user: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
