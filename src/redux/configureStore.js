import { configureStore } from '@reduxjs/toolkit';
import { coinRankingApi } from './apiReducer/coinRanking';

const store = configureStore({
  reducer: {
    [coinRankingApi.reducerPath]: coinRankingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinRankingApi.middleware),
});

export default store;
