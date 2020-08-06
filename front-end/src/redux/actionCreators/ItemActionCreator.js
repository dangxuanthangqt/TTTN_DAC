import {
  CREATE_ITEM_REQUEST,
  CREATE_ITEM_SUCCESS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_REQUEST,
  GET_ITEMS_FOLLOW_CAMPAIGN_REQUEST,
  DELETE_ITEMS_REQUEST,
  UPDATA_ITEM_EDIT_TO_REDUX,
  UPDATE_ITEM_REQUEST,
} from "../actionTypes/ItemActionType";
import { GET_LIST_CAMPAIGN_REQUEST } from "../actionTypes/CampaignActionType";

export const Create_item_request = (data) => {
  return {
    type: CREATE_ITEM_REQUEST,
    payload: data,
  };
};
export const Create_item_success = (data) => {
  return {
    type: CREATE_ITEM_SUCCESS,
    payload: data,
  };
};
export const Get_item_request = () => {
  return {
    type: GET_ITEMS_REQUEST,
  };
};
export const Get_item_success = (data) => {
  return {
    type: GET_ITEMS_SUCCESS,
    payload: data,
  };
};
export const Get_item_follow_campaign_request = (data) => {
  return {
    type: GET_ITEMS_FOLLOW_CAMPAIGN_REQUEST,
    payload: data,
  };
};
export const Delete_item_request = (data) => {
  return {
    type: DELETE_ITEMS_REQUEST,
    payload: data,
  };
};
export const Updata_item_edit_to_redux = (data) => {
  return {
    type: UPDATA_ITEM_EDIT_TO_REDUX,
    payload: data,
  };
};
export const Update_item_request = (data) => {
  return {
    type: UPDATE_ITEM_REQUEST,
    payload: data,
  };
};
