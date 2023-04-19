import { createSlice } from "@reduxjs/toolkit";


//******* Declare your state variable here
const initialState={
    InvgData:{},
  }
const invigilatorsSlice = createSlice({
    name: 'invigilators',
    initialState,
    reducers: {
        setInvgData: (state, action) => {
            state.InvgData = action.payload;
        },
    },

});
// Action creators are generated for each case reducer function
export const { setInvgData }=invigilatorsSlice.actions
export default invigilatorsSlice.reducer;