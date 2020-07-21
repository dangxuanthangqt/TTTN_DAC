
import { takeLatest } from 'redux-saga/effects';
export function* authenSaga(){
    yield takeLatest("LOGIN_REQUEST", watchLogin);
}
function *watchLogin(){
    console.log("abc");
}