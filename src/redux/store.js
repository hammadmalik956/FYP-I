import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { nodeApi } from "../services/nodeApi";

import invigilatorsSlice from './invgSlice';
import StudentSlice from './StudentSlice';
import RoomSlice from './roomSlice';
export const store=configureStore( {
        reducer: {
                // Add the generated reducer as a specific top-level slice
                [ nodeApi.reducerPath ]: nodeApi.reducer,
                invg: invigilatorsSlice,
                student: StudentSlice,
                room: RoomSlice,

        },

        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: ( getDefaultMiddleware ) =>
                getDefaultMiddleware().concat( nodeApi.middleware ),

} )

setupListeners( store.dispatch )
