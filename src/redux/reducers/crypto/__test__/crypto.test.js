import crypto from '../crypto';

const initialState = [];

describe('crypto reducer', () => {
  it('should handle the initial state', () => {
    expect(crypto(undefined, {})).toEqual(initialState);
  });

  it('should handle action type "1"', () => {
    expect(crypto(initialState, { type: '1' })).toEqual('Under Construction');
  });

  it('should handle an unknown action type', () => {
    expect(crypto(initialState, { type: 'unknown' })).toEqual(initialState);
  });
});
