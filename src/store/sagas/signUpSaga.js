import { call, put, takeLatest } from "redux-saga/effects";
import { LoginApiService } from "../../utilities/loginApi.service";

import { signupActions } from "../reducers/signUpSlice";
import { errorMsg, successMsg } from "../../utilities/utils";

export function* handleSignUp(action) {
  try {
    const response = yield call(
      LoginApiService.postData,
      "auth/register",
      action.payload
    );
    if (response.status === 200) {
      yield put(signupActions.signUpSuccess(response.data));
      successMsg(response.data.message);
    }
  } catch (error) {
    yield put(signupActions.signUpFailed(error.response.data));
    errorMsg(error.response.data.error);
  }
}

export default function* signUpSaga() {
  yield takeLatest(signupActions.signUp.type, handleSignUp);
}
