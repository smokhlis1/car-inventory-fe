// store is like a mini temportate in-the-middle database

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice"

export const store = configureStore({
    reducer,
    devTools: true,
})

export default store