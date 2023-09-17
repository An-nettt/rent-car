import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favoriteReducer } from './favorite/favoriteSlice';
import { advertsReducer } from './adverts/advertsSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorite: favoriteReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import { reducer } from './reducer';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'favorite',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
