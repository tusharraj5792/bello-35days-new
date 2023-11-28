import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import signInReducer from "./reducers/signInSlice";
import signUpReducer from "./reducers/signUpSlice";
import forgetPasswordReducer from "./reducers/forgetPasswordSlice";
import verifyEmailReducer from "./reducers/verifyEmailSlice";

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  forgetPassword: forgetPasswordReducer,
  verfiyEmail: verifyEmailReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });
}

sagaMiddleware.run(rootSaga);

export const AppDispatch = store.dispatch;
export const AppStore = setupStore();
export const RootState = store.getState;
