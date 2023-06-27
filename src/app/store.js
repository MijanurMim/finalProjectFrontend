import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../feautres/userDetailsSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
