import { createSlice } from '@reduxjs/toolkit';
import { advertsInitialState } from './advertsInitialState';
import { fetchAdverts } from './advertsThunk';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './advertsHandlers';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
