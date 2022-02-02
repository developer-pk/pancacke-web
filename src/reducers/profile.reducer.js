import { ProfileActions } from '../actions/profileActions';
import { ProfileConstants, WalletConstants } from '../constants';

const initialState = {
  loggedIn: false,
  favourites: [],
};

const ProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProfileConstants.UPDATE_PROFILE:
      return { ...state, ...payload, loggedIn: true };

    case ProfileConstants.UPDATE_SUBSCRIPTION_TIME:
      return { ...state, subscriptionEndTimestamp: payload };

    case WalletConstants.DISCONNECT_WALLET:
      return initialState;

    default:
      return state;
  }
};

export default ProfileReducer;
