import {
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes/ProfileActionTypes";
import produce from "immer";
import { LOGIN_SUCCESS } from "../actionTypes/AuthenActionType";
const initialState = {
  data: {
    first_name: "",
    last_name: "",
    email: "",
    account_name: "",

    company_name: "",

    create_at: new Date(),
    update_at: new Date(),
  },
};
// export const profileReducer = (state = initialState, action) =>
//   produce(state, (draft) => {
//     switch (action.type) {
//       case GET_PROFILE_SUCCESS: {
//         const data = action.payload;
//         draft.first_name = data.first_name;
//         draft.last_name = data.last_name
//         return draft;
//       }
//       default:
//         return draft;
//     }
//   });
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          company_name: action.payload.company_name,
          email: action.payload.email,
          account_name: action.payload.account_name,
          create_at: new Date(action.payload.create_at),
          update_at: new Date(action.payload.update_at),
        },
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          company_name: action.payload.company_name,
          email: action.payload.email,
          account_name: action.payload.account_name,
          create_at: new Date(action.payload.create_at),
          update_at: new Date(action.payload.update_at),
        },
      };
    default:
      return {
        ...state,
      };
  }
};
