import { createSlice } from "@reduxjs/toolkit";


//******* Declare your state variable here
const initialState={
    sExamData:{},
  }
const singleExamSlice = createSlice({
    name: 'ExamDataSingle',
    initialState,
    reducers: {
        setSExamData: (state, action) => {
            state.sExamData = action.payload;
        },
    },

});
// Action creators are generated for each case reducer function
export const { setSExamData }=singleExamSlice.actions
export default singleExamSlice.reducer;