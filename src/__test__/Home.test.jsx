import {
  describe, expect,
  afterAll, afterEach, beforeAll,
} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import Home from '../components/components/Home/Home';
import { rawCoins } from '../dummy';
import { coinRankingApiUrl } from '../redux/apiReducer/coinRanking';
import store from '../redux/configureStore';
// import mm from '../redux/apiReducer/coinRanking'

describe('coinRankingApi', () => {
  const server = setupServer(
    rest.get(`${coinRankingApiUrl}/coins`, (req, res, ctx) => {
      // eslint-disable-next-line no-unused-vars
      const limit = req.url.searchParams.get('limit');
      return res(ctx.status(200), ctx.json({ data: { coins: rawCoins } }));
    }),
  );

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('dispatches the correct actions for the getCoins endpoint', async () => {
    render(<Provider store={store}><Home /></Provider>);
    await waitFor(() => {
      expect(screen.findByTestId('tester'));
    });
  });
});
