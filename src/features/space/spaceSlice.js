
import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
  
const initialState = {
  code: `
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  
  return -1; // Element not found
}`,
  members: [],
}

export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload.code;
    },
    setMember: (state, action) => {
      state.members = action.payload.clients;
    },
    removeMember: (state, action) => {
      state.members = state.members.filter(member => member.username !== action.payload.username);
    }
  }
});

export const { setCode, setMember, removeMember } = spaceSlice.actions;
export default spaceSlice.reducer;