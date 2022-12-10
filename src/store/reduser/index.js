import {
  DISPLAY_TYPES_REPORTS_INPUT_MESSAGES,
  DISPLAY_TYPES_REPORTS_OUTPUT_MESSAGES,
  DISPLAY_TYPES_REPORTS_IZVOD,
  DELETE_USER,
  STORE_USER,
} from "../type";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_TYPES_REPORTS_INPUT_MESSAGES:
      return Object.assign({}, state, { display: 1 });

    case DISPLAY_TYPES_REPORTS_OUTPUT_MESSAGES:
      return Object.assign({}, state, { display: 2 });

    case DISPLAY_TYPES_REPORTS_IZVOD:
      return Object.assign({}, state, { display: 3 });

    case STORE_USER:
      return { ...state, ...action.payload };

    case DELETE_USER:
      return {};

    default:
      return state;
  }
};
