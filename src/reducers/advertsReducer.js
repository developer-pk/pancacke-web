import { AdvertsConstants } from '../constants';

const initialState = [];

export const advertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AdvertsConstants.GET_ADVERTS:
      return action.payload;
    default:
      return state;
  }
};

export default advertsReducer;
