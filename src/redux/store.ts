import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { idsReducer } from './features/userId/IdsSlice';
import { usersReducer } from './features/users/usersSlice';
import { tableApi } from './services/tableApi';

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    ids: idsReducer,
    users: usersReducer,
    [tableApi.reducerPath]: tableApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
