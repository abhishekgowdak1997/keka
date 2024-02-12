import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Reducers'


export const store = configureStore ({
   reducer:{
    getEmail:userSlice,
   }
})