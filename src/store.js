import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./features/space/spaceSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        space: spaceReducer,
        user: userReducer,
    },
});

const rootState = store.getState();
const appDispatch = store.dispatch;