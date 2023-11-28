import { createSlice } from "@reduxjs/toolkit";
import { encryptData } from "../../utilities/utils";

const initialState = {
  authToken: "",
  loggedIn: false,
  isLoading: false,
  signInErrorsMsg: "",
  isCallbackLink: false,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    // sign in
    signIn(state, _action) {
      state.isLoading = true;
      state.loggedIn = false;
    },
    signInSuccess(state, action) {
      state.isLoading = false;
      state.loggedIn = true;
    },
    signInFailed(state, action) {
      state.isLoading = false;
      state.signInErrorsMsg = action.payload.error;
    },
    // setting callback link
    setCallbackLinkAction(state) {
      return {
        ...state,
        isCallbackLink: true,
      };
    },
    resetSignInState(state) {
      state.isLoading = false;
      state.loggedIn = false;
      state.authToken = "";
      state.signInErrorsMsg = "";
    },
  },
});

// Actions
export const signInActions = signInSlice.actions;

// Selectors
export const selectIsLoginLoading = (state) => state.signIn.isLoading;
export const selectIsLoggedIn = (state) => state.signIn.loggedIn;
export const selectSignInErrorsMsg = (state) => state.signIn.signInErrorsMsg;
export const selectIsCallbackLink = (state) => state.signIn.isCallbackLink;

// Reducer
const signInReducer = signInSlice.reducer;
export default signInReducer;
