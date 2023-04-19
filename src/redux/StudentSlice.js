import { createSlice } from "@reduxjs/toolkit";


//******* Declare your state variable here
const initialState={
    StudData:{},
  }
const StudentSlice = createSlice({
    name: 'Students',
    initialState,
    reducers: {
        setStudData: (state, action) => {
            state.StudData = action.payload;
        },
    },

});
// Action creators are generated for each case reducer function
export const { setStudData }=StudentSlice.actions
export default StudentSlice.reducer;