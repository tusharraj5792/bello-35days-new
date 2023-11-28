import { all } from "redux-saga/effects";
import signInSaga from "./signInSaga";
import signUpSaga from "./signUpSaga";
import forgetPasswordSaga from "./forgetPasswordSaga";
import verifyEmailSaga from "./verifyEmailSaga";

export default function* rootSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    forgetPasswordSaga(),
    verifyEmailSaga(),
  ]);
}
