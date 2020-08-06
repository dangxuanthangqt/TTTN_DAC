import { takeLatest, put, call } from "redux-saga/effects";
import {
  CREATE_CAMPAIGN_REQUEST,
  GET_LIST_CAMPAIGN_REQUEST,
  DELETE_CAMPAIGN_REQUEST,
  EDIT_CAMPAIGN_REQUEST,
} from "../actionTypes/CampaignActionType";
import {
  showLoading,
  hideLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  ApiCreateCampain,
  ApiGetListCampaign,
  ApiDeleteCampain,
  ApiEditCampaign,
} from "../../services/api/management";
import { toastifyError, toastifySuccess } from "../../Helpers/toatify";
import {
  Get_list_campaign_success,
  Get_list_campaign_request,
} from "../actionCreators/CampaignActionCreator";
import { clearAllItem } from "../../Helpers/localStorageService";

export function* campaignSaga() {
  yield takeLatest(CREATE_CAMPAIGN_REQUEST, watchCreateCampaign);
  yield takeLatest(GET_LIST_CAMPAIGN_REQUEST, watchGetListCampaign);
  yield takeLatest(DELETE_CAMPAIGN_REQUEST, watchDeleteCampaign);
  yield takeLatest(EDIT_CAMPAIGN_REQUEST, watchEditCampaign);
}
function* watchEditCampaign({ payload }) {
  try {
    const res = yield call(ApiEditCampaign, payload._id, payload);
    yield call(toastifySuccess, "EDIT SUCCESSFULLY !");
    yield put(Get_list_campaign_request());
  } catch (e) {
    yield call(toastifyError, "EDIT FAILURE !");
  }
}
function* watchDeleteCampaign({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiDeleteCampain, payload);
    yield call(toastifySuccess, res.data.message);
    yield put(Get_list_campaign_request());
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, "DELETE FAILURE !");
    yield put(hideLoading());
  }
}
function* watchGetListCampaign() {
  yield put(showLoading());
  try {
    const res = yield call(ApiGetListCampaign);
    yield put(Get_list_campaign_success(res.data.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
  }
}
function* watchCreateCampaign({ payload }) {
  try {
    const res = yield call(ApiCreateCampain, { ...payload });
    yield call(toastifySuccess, res.data.message);
    yield put(Get_list_campaign_request());
  } catch (e) {
    yield call(toastifyError, "ERROR");
  }
}
