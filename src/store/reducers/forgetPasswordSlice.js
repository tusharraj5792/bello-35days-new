import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isLinkSent: false,
  isResetPasswordSuccess: false,
  forgetPasswordErrors: "",
  resetPasswordErrors: "",
  // forgotPasswordToken: "",
};
const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {
    forgetPassword: (state) => {
      state.isLoading = true;
    },
    forgetPasswordSuccess(state, action) {
      state.isLoading = false;
      state.isLinkSent = true;

      localStorage.setItem("forgotPasswordToken", action.payload.data);
      // state.forgotPasswordToken = action.payload;
    },
    forgetPasswordFailed(state, action) {
      state.forgetPasswordErrors = action.payload.error;
      state.isLoading = false;
    },
    resetPassword: (state) => {
      state.isLoading = true;
    },
    resetPasswordSuccess(state, action) {
      state.isLoading = false;
      state.isResetPasswordSuccess = true;
    },
    resetPasswordFailed(state, action) {
      state.resetPasswordErrors = action.payload.error;
      state.isLoading = false;
    },
  },
});
// Actions
export const forgetPasswordActions = forgetPasswordSlice.actions;
// Selectors
export const selectForgetPasswordLoding = (state) =>
  state.forgetPassword.isLoading;
export const selectLinkSent = (state) => state.forgetPassword.isLinkSent;

export const selectForgetPasswordErrors = (state) =>
  state.forgetPassword.forgetPasswordErrors;
export const selectResetPasswordErrors = (state) =>
  state.forgetPassword.resetPasswordErrors;
export const selectResetPasswordSuccess = (state) =>
  state.forgetPassword.isResetPasswordSuccess;
// export const selectForgotPasswordToken = (state) =>
//   state.forgetPassword.forgotPasswordToken;
// Reducer
const forgetPasswordReducer = forgetPasswordSlice.reducer;
export default forgetPasswordReducer;
