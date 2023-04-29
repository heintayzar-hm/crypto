const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;
const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const coinRankingApiUrl = import.meta.env.VITE_COIN_RANKING_API_URL;
const cacheTimeInSecond = 300;
const apiState = ['/fulfilled', '/pending', '/rejected'];
const links = [
  {
    id: 1,
    path: '/home',
    text: 'Home',
  },
  {
    id: 2,
    path: '/coin',
    text: 'Coin',
  },
];
export {
  rapidApiKey,
  rapidApiHost,
  coinRankingApiUrl,
  cacheTimeInSecond,
  apiState,
  links,
};
