import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
} from "../actionTypes/AuthenActionType";

export const login_request = (data) => {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
};
export const login_success = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const login_failure = (data) => {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
};
export const register_request = (data) => {
  return {
    type: REGISTER_REQUEST,
    payload: data,
  };
};
export const logout_request = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
