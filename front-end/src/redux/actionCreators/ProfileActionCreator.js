import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_REUQEST,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes/ProfileActionTypes";

export const getProfileRequest = (data) => {
  return {
    type: GET_PROFILE_REQUEST,
    payload: data,
  };
};
export const getProfileSuccess = (data) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: data,
  };
};
export const updateProfileRequest = (data) => {
  return {
    type: UPDATE_PROFILE_REUQEST,
    payload: data,
  };
};
export const updateProfileSuccess = (data) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
};
