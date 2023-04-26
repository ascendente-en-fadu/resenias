import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from './sessionSlice';
import { reviewsReducer } from './reviewsSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    reviews: reviewsReducer,
  },
});
