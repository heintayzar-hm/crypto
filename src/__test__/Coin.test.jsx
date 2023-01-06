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
import Coin from '../components/components/Coin/Coin';
import { data } from '../dummy';
import { coinRankingApiUrl } from '../redux/apiReducer/coinRanking';
import store from '../redux/configureStore';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;

describe('coinRankingApi', () => {
  const server = setupServer(
    rest.get(`${coinRankingApiUrl}/coin/*`, (req, res, ctx) => res(ctx.status(200), ctx.json({ data: { coin: data } }))),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('mocking data fetching and Redux Store connection for coin', async () => {
    render(<Provider store={store}><HashRouter><Coin /></HashRouter></Provider>);
    await waitFor(() => {
      expect(screen.getAllByTestId('coin').length).toBe(1);
    });
  });
});
