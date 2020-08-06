import { GET_ALL_USER_SUCCESS } from "../actionTypes/UserActionType";

const initialState = {
  listUser: [
    {
      _id: "5f1eb2778552e114e04a3b4f",
      status: "active",
      email: "dangxuanthangqt10@gmail.com",
      password: "$2b$10$CUiewva4LaNQWEuT.O6HG.lQSld5pKg0m2RqtwrFd948XTkLrosAq",
      account_name: "dangxuanthang10",
      company_name: "DAC tech",
      role: {
        _id: "5f1553f653efb329c296df47",
        name: "dac",
      },
      create_at: "2020-07-27T10:54:47.358Z",
      update_at: "2020-07-27T10:54:47.358Z",
      __v: 0,
    },
  ],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        listUser: action.payload,
      };

    default:
      return state;
  }
};
