import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_ALL_USER_REQUEST,
  DELETE_USER_REQUEST,
  CHANGE_STATUS_REQUEST,
} from "../actionTypes/UserActionType";
import {
  showLoading,
  hideLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  ApiGetAllUser,
  ApiDeleteItemFollowId,
  ApiChangeStatusUser,
  ApiDeleteUser,
} from "../../services/api/management";
import {
  Get_all_user_success,
  Get_all_user_request,
} from "../actionCreators/UserActionCreator";
import { toastifyError, toastifySuccess } from "../../Helpers/toatify";

export function* userSaga() {
  yield takeLatest(GET_ALL_USER_REQUEST, watchGetAllUser);
  yield takeLatest(DELETE_USER_REQUEST, watchDeleteUser);
  yield takeLatest(CHANGE_STATUS_REQUEST, watchChangeStatus);
}
function* watchChangeStatus({ payload }) {
  console.log(payload);
  yield put(showLoading());
  try {
    const res = yield call(ApiChangeStatusUser, payload.id, {
      status: payload.status,
    });
    yield call(toastifySuccess, res.data.message);
    yield put(Get_all_user_request());

    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, "ERROR");
    yield put(hideLoading());
  }
}
function* watchDeleteUser({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiDeleteUser, payload);
    yield call(toastifySuccess, res.data.message);
    yield put(Get_all_user_request());

    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, "ERROR");
    yield put(hideLoading());
  }
}
function* watchGetAllUser({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(ApiGetAllUser);
    yield put(Get_all_user_success(res.data.data));
    yield put(hideLoading());
  } catch (error) {
    yield call(toastifyError, "ERROR");
    yield put(hideLoading());
  }
}
