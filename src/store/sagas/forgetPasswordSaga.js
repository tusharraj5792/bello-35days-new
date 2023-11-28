import { call, put, takeLatest } from "redux-saga/effects";
import { LoginApiService } from "../../utilities/loginApi.service";
import { forgetPasswordActions } from "../reducers/forgetPasswordSlice";
import { errorMsg, successMsg } from "../../utilities/utils";

export function* handleForgetPassword(action) {
  try {
    const response = yield call(
      LoginApiService.postData,
      "auth/forgotpassword",
      action.payload
    );
    if (response.status === 200) {
      yield put(forgetPasswordActions.forgetPasswordSuccess(response.data));
      successMsg(response.data.message);
    }
  } catch (error) {
    yield put(forgetPasswordActions.forgetPasswordFailed(error.response.data));
    errorMsg(error.response.data.error);
  }
}

export function* handleResetPassword(action) {
  try {
    const response = yield call(
      LoginApiService.postData,
      `auth/reset-password/${action.payload.paramObj.id}/${action.payload.paramObj.token}`,
      { password: action.payload.password }
    );
    if (response.status === 200) {
      yield put(forgetPasswordActions.resetPasswordSuccess(response.data));
      successMsg(response.data.message);
      localStorage.removeItem("forgotPasswordToken");
    }
  } catch (error) {
    yield put(forgetPasswordActions.resetPasswordFailed(error.response.data));
    errorMsg(error.response.data.error);
  }
}
export default function* forgetPasswordSaga() {
  yield takeLatest(
    forgetPasswordActions.forgetPassword.type,
    handleForgetPassword
  );
  yield takeLatest(
    forgetPasswordActions.resetPassword.type,
    handleResetPassword
  );
}
