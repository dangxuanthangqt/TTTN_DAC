import {
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  DELETE_USER_REQUEST,
  CHANGE_STATUS_REQUEST,
} from "../actionTypes/UserActionType";

export const Get_all_user_request = (data) => {
  return {
    type: GET_ALL_USER_REQUEST,
    payload: data,
  };
};
export const Get_all_user_success = (data) => {
  return {
    type: GET_ALL_USER_SUCCESS,
    payload: data,
  };
};
export const Delete_user_request = (data) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: data,
  };
};
export const Change_status_user_request = (data) => {
  return {
    type: CHANGE_STATUS_REQUEST,
    payload: data,
  };
};
