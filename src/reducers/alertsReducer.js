import { AlertConstants } from '../constants';

const initialState = [];

export const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AlertConstants.WARNING_ALERT:
      return [...state, action.payload];
    case AlertConstants.SUCCESS_ALERT:
      return [...state, action.payload];
    case AlertConstants.REMOVE_ALERT:
      return [...state].filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertsReducer;
