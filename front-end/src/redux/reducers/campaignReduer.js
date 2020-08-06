import {
  GET_LIST_CAMPAIGN_SUCCESS,
  UPDATA_EDIT_TO_STORE,
} from "../actionTypes/CampaignActionType";

const initialState = {
  data: [
    {
      _id: "5f282f9ee786140eb0915ead",
      name: "single economy",
      start_date: "2020-08-03T15:32:23.081Z",
      end_date: "2020-08-03T15:32:23.081Z",
      budget: 1,
      bid_amount: 1,
      title: "blue team",
      description: "123",
      final_url: "123",
    },
  ],
  dataEdit: {
    _id: "5f282f9ee786140eb0915ead",
    name: "single economy",
    start_date: "2020-08-03T15:32:23.081Z",
    end_date: "2020-08-03T15:32:23.081Z",
    budget: 1,
    bid_amount: 1,
    title: "blue team",
    description: "123",
    final_url: "123",
  },
};

export const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case UPDATA_EDIT_TO_STORE: {
      return {
        ...state,
        dataEdit: action.payload
      };
    }
    default:
      return state;
  }
};
