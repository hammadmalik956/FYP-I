import { createSlice } from "@reduxjs/toolkit";


//******* Declare your state variable here
const initialState={
    RoomData:{},
  }
const RoomSlice = createSlice({
    name: 'Rooms',
    initialState,
    reducers: {
        setRoomData: (state, action) => {
            state.RoomData = action.payload;
        },
    },

});
// Action creators are generated for each case reducer function
export const { setRoomData }=RoomSlice.actions
export default RoomSlice.reducer;