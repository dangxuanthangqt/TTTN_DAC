import { takeLatest, call, put } from "redux-saga/effects";
import {
  CREATE_ITEM_REQUEST,
  GET_ITEMS_REQUEST,
  GET_ITEMS_FOLLOW_CAMPAIGN_REQUEST,
  DELETE_ITEMS_REQUEST,
  UPDATE_ITEM_REQUEST,
} from "../actionTypes/ItemActionType";
import {
  showLoading,
  hideLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  ApiCreateItem,
  ApiGetItems,
  ApiGetItemFollowCampaign,
  ApiDeleteItemFollowId,
  ApiUpdateItem,
} from "../../services/api/management";
import { toastifySuccess, toastifyError } from "../../Helpers/toatify";
import {
  Get_item_success,
  Get_item_request,
} from "../actionCreators/ItemActionCreator";

export function* itemSaga() {
  yield takeLatest(CREATE_ITEM_REQUEST, watchCreateItem);
  yield takeLatest(GET_ITEMS_REQUEST, watchGetItem);
  yield takeLatest(
    GET_ITEMS_FOLLOW_CAMPAIGN_REQUEST,
    watchGetItemFollowCampaign
  );
  yield takeLatest(DELETE_ITEMS_REQUEST, watchDeleteItem);
  yield takeLatest(UPDATE_ITEM_REQUEST, watchUpdateItem);
}
function * watchUpdateItem({payload}){
  console.log(payload)
  yield put(showLoading());
  try {
    const res = yield call(ApiUpdateItem, payload);
    yield call(toastifySuccess, res.data.message);
    yield put(Get_item_request());
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, error.data.message);
    yield put(hideLoading());
  }
}
function* watchDeleteItem({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiDeleteItemFollowId, payload);
    yield call(toastifySuccess, res.data.message);
    yield put(Get_item_request());
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, error.data.message);
    yield put(hideLoading());
  }
}

function* watchGetItemFollowCampaign({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiGetItemFollowCampaign, payload);
    yield call(toastifySuccess, res.data.message);
    yield put(Get_item_success(res.data.data));
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, error.data.message);
    yield put(hideLoading());
  }
}
function* watchGetItem() {
  yield put(showLoading());
  try {
    const res = yield call(ApiGetItems);

    yield put(Get_item_success(res.data.data));
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, error.data.message);
    yield put(hideLoading());
  }
}
function* watchCreateItem({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiCreateItem, payload);
    yield call(toastifySuccess, res.data.message);
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, error.data.message);
    yield put(hideLoading());
  }
}
