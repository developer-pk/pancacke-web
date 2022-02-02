import config from '../config';
import { ProfileConstants } from '../constants';
import { SubscriptionService } from '../services/subscription.service';

const updateProfile = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${config.API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    });

    const { data } = await response.json();

    dispatch({
      type: ProfileConstants.UPDATE_PROFILE,
      payload: data,
    });
  } catch (e) {
    console.error(e);
  }
};

const checkSubscription = (walletAddress) => async (dispatch) => {
  try {
    const endTimestamp = await SubscriptionService.checkSubscription(walletAddress);

    dispatch({
      type: ProfileConstants.UPDATE_SUBSCRIPTION_TIME,
      payload: endTimestamp,
    });
  } catch (e) {
    console.log({ e });
  }
};

export const ProfileActions = {
  updateProfile,
  checkSubscription,
};
