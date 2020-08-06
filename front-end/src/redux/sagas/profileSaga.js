import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_PROFILE_REQUEST,
  UPDATE_PROFILE_REUQEST,
} from "../actionTypes/ProfileActionTypes";
import {
  showLoading,
  hideLoading,
} from "../actionCreators/LoadingActionCreator";
import { ApiGetProfile, ApiUpdateProfile } from "../../services/api/management";
import {
  getProfileSuccess,
  updateProfileSuccess,
} from "../actionCreators/ProfileActionCreator";
import { toastifySuccess, toastifyError } from "../../Helpers/toatify";

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE_REQUEST, watchGetProfile);
  yield takeLatest(UPDATE_PROFILE_REUQEST, watchUpdateProfile);
}
function* watchUpdateProfile({ payload }) {
  yield put(showLoading());
  let data = {
    last_name: payload.last_name,
    first_name: payload.first_name,
    company_name: payload.company_name,
    password: payload.password,
  };
  try {
    const res = yield call(ApiUpdateProfile, data);
    yield put(updateProfileSuccess(res.data.data));
    yield call(toastifySuccess, "UPDATE PROFILE SUCCESSFULLT !");
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield call(toastifyError, "UPDATE PROFILE FAILURE !");
  }
}
function* watchGetProfile({ paylaod }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiGetProfile);
    yield put(getProfileSuccess(res.data));
    
    yield call(toastifySuccess, "GET PROFILE SUCCESSFULLY !");
    yield put(hideLoading());
  } catch (e) {
    yield put(hideLoading());
    yield call(toastifyError, "GET PROFILE FAILURE !");
  }
}
