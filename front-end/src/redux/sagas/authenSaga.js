import { call, delay, put, takeLatest } from "redux-saga/effects";
import { toastifySuccess, toastifyError } from "../../Helpers/toatify";
import { loginApi, registerApi } from "../../services/api/authenApi";
import {
  hideLoading,
  showLoading,
} from "../actionCreators/LoadingActionCreator";
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
} from "../actionTypes/AuthenActionType";
import JwtDecode from "jwt-decode";
import { login_success } from "../actionCreators/AuthenActionCreator";
import history from "../../Helpers/history";
import { setAccessToken, clearAllItem } from "../../Helpers/localStorageService";
export function* authenSaga() {
  yield takeLatest(LOGIN_REQUEST, watchLogin);
  yield takeLatest(REGISTER_REQUEST, watchRegister);
  yield takeLatest(LOGOUT_REQUEST, watchLogout);
}
function* watchLogout() {
  yield call(clearAllItem);
  yield call(history.push, "/auth/login");
  yield call(toastifySuccess, "Logout successfully !");
}
function* watchRegister({ payload }) {
  delete payload.confirm_password;

  yield put(showLoading());
  try {
    const res = yield call(registerApi, payload);

    yield put(hideLoading());
    yield call(toastifySuccess, "Register successfully !");
    yield call(history.push, "/auth/login");
  } catch (e) {
    yield call(toastifyError, e.data.message);
    yield put(hideLoading());
  }
}
function* watchLogin({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(loginApi, payload);

    const dataInToken = JwtDecode(res.data.accessToken);
    yield call(setAccessToken, res.data.accessToken);
    yield put(login_success(dataInToken));
    yield call(toastifySuccess, "Login successfully!");
    yield call(history.push, "/");
    yield delay(500);
    yield put(hideLoading());
  } catch (e) {
    yield call(toastifyError, e.data.message);
    // yield call(toastifyError(""))
    yield put(hideLoading());
  }
}
