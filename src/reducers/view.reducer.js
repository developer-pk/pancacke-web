import { ViewConstants } from '../constants';

const initState = {
  symbol: 'TCAKE',
  tokenAddress: '0x3b831d36ed418e893f42d46ff308c326c239429f',
  contract: '0x4f4f33936276bd0603953bd6b1b2b7eecb7f5518',
  version: 'v1',
};

const ViewReducer = (state = initState, action) => {
  switch (action.type) {
    case ViewConstants.UPDATE_TOKEN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ViewReducer;
