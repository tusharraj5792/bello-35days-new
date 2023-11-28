import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  verifyEmailError: "",
};

const verifyEmailSlice = createSlice({
  name: "verifyEmail",
  initialState,
  reducers: {
    verifyEmail: (state) => {
      state.isLoading = true;
    },
    verifyEmailSuccess: (state, action) => {
      state.isLoading = false;
    },
    verifyEmailFailed: (state, action) => {
      state.isLoading = false;
      state.verifyEmailError = action.payload;
    },
  },
});

// Actions
export const verifyEmailActions = verifyEmailSlice.actions;

// Selectors
// export const selectIsRegistering = (state) => state.signUp.isLoading;
// export const selectIsRegister = (state) => state.signUp.isRegister;
// export const selectSignUpErrorsMsg = (state) => state.signUp.signupErrorsMsg;

// Reducer
const verifyEmailReducer = verifyEmailSlice.reducer;
export default verifyEmailReducer;
