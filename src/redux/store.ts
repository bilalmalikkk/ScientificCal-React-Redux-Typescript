import { configureStore } from '@reduxjs/toolkit';
import opReducer from '../features/operations/calSlice';

export const store = configureStore({
  reducer: {
  Calculator : opReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

