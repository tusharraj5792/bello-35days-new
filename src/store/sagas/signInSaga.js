import { call, put, takeLatest } from "redux-saga/effects";
import { LoginApiService } from "../../utilities/loginApi.service";
import { signInActions } from "../reducers/signInSlice";
import { errorMsg, setItem, successMsg } from "../../utilities/utils";

export function* handleSignIn(action) {
  try {
    const response = yield call(
      LoginApiService.postData,
      "auth/login",
      action.payload
    );
    if (response.status === 200) {
      setItem("token", response.data.token);
      const userData = {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        id: response.data.id,
      };
      const date = new Date();
      const updateDate = new Date(response.data.expiresIn * 1000);
      document.cookie =
        "RefreshCookie  = " +
        updateDate.toString() +
        "; expires = " +
        updateDate.toString();

      const now = new Date();
      const secondSinceEpoch = Math.round(now.getTime() / 1000);

      const expireTimeInSecond =
        response.data.refreshTokenExpiresIn - secondSinceEpoch;
      const expiryRefreshTokenDate = new Date(date.getTime());

      expiryRefreshTokenDate.setDate(
        expiryRefreshTokenDate.getDate() + expireTimeInSecond
      );

      document.cookie =
        "RefreshTokenExpiryCookie = " +
        expiryRefreshTokenDate.toString() +
        "; expires = " +
        expiryRefreshTokenDate.toString();
      setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("userData", JSON.stringify(userData));
      yield put(signInActions.signInSuccess(response.data));
      successMsg("Login Successfully");
    }
  } catch (error) {
    yield put(signInActions.signInFailed(error.response.data)); // Dispatch action
    errorMsg(error.response.data.error);
  }
}

export default function* signInSaga() {
  yield takeLatest(signInActions.signIn.type, handleSignIn);
}
