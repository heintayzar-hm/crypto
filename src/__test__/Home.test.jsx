import {
  describe, expect,
  afterAll, afterEach, beforeAll,
} from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import {
  fetch, Headers, Request, Response,
} from 'cross-fetch';
import { HashRouter } from 'react-router-dom';
import Home from '../components/components/Home/Home';
import { rawCoins } from '../dummy';
import { coinRankingApiUrl } from '../redux/apiReducer/coinRanking';
import store from '../redux/configureStore';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;

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
  it('mocking data fetching and Redux Store connection', async () => {
    render(<Provider store={store}><HashRouter><Home /></HashRouter></Provider>);
    await waitFor(() => {
      expect(screen.getAllByTestId('item').length).toBeGreaterThan(3);
    });
  });

  it('Test the Component', async () => {
    render(<Provider store={store}><HashRouter><Home /></HashRouter></Provider>);
    await waitFor(() => {
      expect(screen.getByTestId('tester').textContent).toBe('Top 10 CryptoCurrencies ');
    });
  });
});
