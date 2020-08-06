import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { loadingReducer } from "./loadingReducer";
import { profileReducer } from "./profileReducer";
import { campaignReducer } from "./campaignReduer";
import { itemReducer } from "./itemReducer";
import { userReducer } from "./userReducer";
const myReducer = combineReducers({
  Authorization: loginReducer,
  LoadingState: loadingReducer,
  ProfileState: profileReducer,
  CampaignState: campaignReducer,
  ItemState: itemReducer,
  UserState: userReducer,
});
export default myReducer;
