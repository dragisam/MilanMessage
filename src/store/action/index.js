import {
  DISPLAY_TYPES_REPORTS_INPUT_MESSAGES,
  DISPLAY_TYPES_REPORTS_OUTPUT_MESSAGES,
  DISPLAY_TYPES_REPORTS_IZVOD,
  DELETE_USER,
  STORE_USER,
} from "../type";

export const ulazne_poruke = () => {
  return {
    type: DISPLAY_TYPES_REPORTS_INPUT_MESSAGES,
  };
};

export const izlazne_poruke = () => {
  return {
    type: DISPLAY_TYPES_REPORTS_OUTPUT_MESSAGES,
  };
};

export const Izvodi = () => {
  return {
    type: DISPLAY_TYPES_REPORTS_IZVOD,
  };
};

export const setUser = (user) => {
  return {
    type: STORE_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: DELETE_USER,
  };
};
