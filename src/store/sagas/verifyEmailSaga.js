import { call, put, takeLatest } from "redux-saga/effects";
import { LoginApiService } from "../../utilities/loginApi.service";
import { errorMsg, successMsg } from "../../utilities/utils";
import { verifyEmailActions } from "../reducers/verifyEmailSlice";

export function* handleVerifyEmail(action) {
  try {
    const response = yield call(
      LoginApiService.getData,
      `auth/VerifiedEmail/${action.payload.id}/${action.payload.token}`
    );
    if (response.status === 200) {
      yield put(verifyEmailActions.verifyEmailSuccess(response.data));
      successMsg(response.data.message);
      localStorage.removeItem("verifyEmailToken");
    }
  } catch (error) {
    yield put(verifyEmailActions.verifyEmailFailed(error.response.data));
    errorMsg(error.response.data.error);
  }
}

export default function* verifyEmailSaga() {
  yield takeLatest(verifyEmailActions.verifyEmail.type, handleVerifyEmail);
}
