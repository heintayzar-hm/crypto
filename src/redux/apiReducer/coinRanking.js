import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  cacheTimeInSecond, coinRankingApiUrl, rapidApiHost, rapidApiKey,
} from '../../constant';

const coinRankingApiHeaders = {
  'x-rapidapi-host': rapidApiHost,
  'x-rapidapi-key': rapidApiKey,
};
const createRequest = (url) => ({ url, headers: coinRankingApiHeaders });
export { coinRankingApiUrl };
export const coinRankingApi = createApi({
  reducerPath: 'coinRankingApi',
  baseQuery: fetchBaseQuery({ baseUrl: coinRankingApiUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
      keepUnusedDataFor: cacheTimeInSecond,
    }),

    getCoin: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
      keepUnusedDataFor: cacheTimeInSecond,
    }),

    getCoinHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      keepUnusedDataFor: cacheTimeInSecond,
    }),
  }),
});

export const {
  useGetCoinQuery,
  useGetCoinsQuery,
  useGetCoinHistoryQuery,
} = coinRankingApi;
