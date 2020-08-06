import {
  GET_ITEMS_SUCCESS,
  UPDATA_ITEM_EDIT_TO_REDUX,
} from "../actionTypes/ItemActionType";

const inititalState = {
  listItems: [
    {
      _id: "5f283101e786140eb0915eae",
      name: "single economy dang",
      start_date: "2020-08-03T15:44:43.254Z",
      end_date: "2020-08-14T15:44:00.000Z",
      budget: 1,
      bid_amount: 4,
      title: "database design",
      description: "123",
      final_url: "321",
      user_id: "5f2474f8847cbd18306e5766",
      __v: 0,
      items: {
        _id: "5f29b5043371050438756f8c",
        campaign_id: "5f283101e786140eb0915eae",
        landing_url: "http://localhost:3000/management/campaign",
        name: "USB",
        __v: 0,
      },
    },
  ],
  items: {
    _id: "5f29b5043371050438756f8c",
    campaign_id: "5f283101e786140eb0915eae",
    landing_url: "http://localhost:3000/management/campaign",
    name: "USB",
    __v: 0,
  },
};
export const itemReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        listItems: action.payload,
      };
    case UPDATA_ITEM_EDIT_TO_REDUX:
      return {
        ...state,
        items: {...action.payload},
      };
    default:
      return state;
  }
};
