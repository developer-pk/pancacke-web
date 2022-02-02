import { ViewConstants } from '../constants';

const updateToken = (symbol, tokenAddress, version, contract) => (dispatch) => {
  dispatch({
    type: ViewConstants.UPDATE_TOKEN,
    payload: { symbol, tokenAddress, version, contract },
  });
};

export const ViewActions = {
  updateToken,
};
