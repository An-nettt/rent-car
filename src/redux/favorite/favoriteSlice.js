import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorite',
  storage,
};

const favoriteInitialState = {
  array: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: favoriteInitialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.array.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const index = state.array.findIndex(
        (favorite) => favorite.id === action.payload
      );

      state.array.splice(index, 1);
    },
  },
});

export const { addToFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
export const getFavorite = (state) => state.favorite.array;
