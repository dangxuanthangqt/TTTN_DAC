import { authenSaga } from "./authenSaga";
import { fork } from "redux-saga/effects";
import profileSaga from "./profileSaga";
import { campaignSaga } from "./campaignSaga";
import { itemSaga } from "./itemSaga";
import { userSaga } from "./userSaga";
function* rootSaga() {
  yield fork(authenSaga);
  yield fork(profileSaga);
  yield fork(campaignSaga);
  yield fork(itemSaga);
  yield fork(userSaga);
}
export default rootSaga;
