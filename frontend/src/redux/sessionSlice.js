import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    sessionId: '',
  },
  reducers: {
    setSessionId: (state, action) => {
      state.sessionId = action.payload;
    },
    clearSessionId: (state) => {
      state.sessionId = '';
    },
  },
});

export const { setSessionId, clearSessionId } = sessionSlice.actions;

export const sessionReducer = sessionSlice.reducer;
