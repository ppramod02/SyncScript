
import { ReducerType, createSlice } from "@reduxjs/toolkit";

export interface SpaceState {
    code: string
  }
  
  const initialState: SpaceState = {
    code: '',
  }

export const spaceSlice = createSlice({
    name: 'space',
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload.code;
        }
    }
});

export const { setCode } = spaceSlice.actions;
export default spaceSlice.reducer;