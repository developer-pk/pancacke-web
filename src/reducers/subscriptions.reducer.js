import { SubscriptionsConstants } from '../constants/subscriptions.constants';

const SubscriptionsReducer = (state = null, action) => {
  switch (action.type) {
    case SubscriptionsConstants.GET_SUBSCRIPTIONS_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default SubscriptionsReducer;
