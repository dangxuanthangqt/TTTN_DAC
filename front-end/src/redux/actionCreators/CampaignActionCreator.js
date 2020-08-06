import {
  CREATE_CAMPAIGN_REQUEST,
  CREATE_CAMPAIGN_SUCCESS,
  GET_LIST_CAMPAIGN_REQUEST,
  GET_LIST_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_REQUEST,
  DELETE_CAMPAIGN_SUCCESS,
  UPDATA_EDIT_TO_STORE,
  EDIT_CAMPAIGN_REQUEST,
  EDIT_CAMPAIGN_SUCCESS,
} from "../actionTypes/CampaignActionType";

export const Create_campaign_request = (data) => {
  return {
    type: CREATE_CAMPAIGN_REQUEST,
    payload: data,
  };
};
export const Create_campaign_success = (data) => {
  return {
    type: CREATE_CAMPAIGN_SUCCESS,
    payload: data,
  };
};
export const Get_list_campaign_request = (data) => {
  return {
    type: GET_LIST_CAMPAIGN_REQUEST,
    payload: data,
  };
};
export const Get_list_campaign_success = (data) => {
  return {
    type: GET_LIST_CAMPAIGN_SUCCESS,
    payload: data,
  };
};
export const Delete_campaign_request = (data) => {
  return {
    type: DELETE_CAMPAIGN_REQUEST,
    payload: data,
  };
};
export const Delete_campaign_success = () => {
  return {
    type: DELETE_CAMPAIGN_SUCCESS,
  };
};
export const Up_data_edit_to_store = (data) => {
  return {
    type: UPDATA_EDIT_TO_STORE,
    payload: data,
  };
};
export const Edit_campaign_request = (data) => {
  return {
    type: EDIT_CAMPAIGN_REQUEST,
    payload: data,
  };
};
export const Edit_campaign_success = (data) => {
  return {
    type: EDIT_CAMPAIGN_SUCCESS,
    payload: data,
  };
};
