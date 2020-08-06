import { LOGIN_SUCCESS } from "../actionTypes/AuthenActionType";

const initialState = {

};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...action.payload.data
      }
    default:
      return state;
  }
};
