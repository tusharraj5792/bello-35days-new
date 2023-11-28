import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isRegister: false,
  isLoading: false,
  signupErrorsMsg: "",
};
const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUp: (state) => {
      state.isLoading = true;
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
      state.isRegister = true;
      localStorage.setItem("verifyEmailToken", action.payload.data);
    },
    signUpFailed: (state, action) => {
      state.isLoading = false;
      state.signupErrorsMsg = action.payload.error;
    },
    resetSignUpState(state) {
      state.isLoading = false;
      state.isRegister = false;
      state.signupErrorsMsg = "";
    },
  },
});

// Actions
export const signupActions = signUpSlice.actions;

// Selectors
export const selectIsRegistering = (state) => state.signUp.isLoading;
export const selectIsRegister = (state) => state.signUp.isRegister;
export const selectSignUpErrorsMsg = (state) => state.signUp.signupErrorsMsg;

// Reducer
const signUpReducer = signUpSlice.reducer;
export default signUpReducer;
