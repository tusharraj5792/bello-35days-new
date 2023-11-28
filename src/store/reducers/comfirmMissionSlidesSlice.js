import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  coreValues: "1",
  vision: "2",
  mission: "3",
};
const comfirmMissionSlidesSlice = createSlice({
  name: "confirmMissionSlides",
  initialState,
  reducers: {
    getAnswer: (state, action) => {
      console.log(action.payload);
      state = action.payload;
    },
  },
});
// Actions
export const comfirmMissionSlidesActions = comfirmMissionSlidesSlice.actions;
// Selectors
export const selectCompanyBeliefSystem = (state) => state.comfirmMissionSlides;
// Reducer
const comfirmMissionSlidesReducer = comfirmMissionSlidesSlice.reducer;
export default comfirmMissionSlidesReducer;
