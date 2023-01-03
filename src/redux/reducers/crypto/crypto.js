// Actions

const initialState = [];

// Reducer
const crypto = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return 'Under Construction';
    default:
      return state;
  }
};

export default crypto;
// Creator Actions
