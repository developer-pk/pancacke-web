import { SubscriptionsConstants } from '../constants/subscriptions.constants';
import { SubscriptionService } from '../services/subscription.service';

const getSubscriptionData = () => async (dispatch) => {
  try {
    SubscriptionService.getPrice();

    const [price, period] = await Promise.all([
      SubscriptionService.getPrice(),
      SubscriptionService.getPeriod(),
    ]);

    dispatch({
      type: SubscriptionsConstants.GET_SUBSCRIPTIONS_DATA,
      payload: {
        price,
        period,
      },
    });
  } catch (e) {
    console.log({ e });
  }
};

export const SubscriptionsActions = {
  getSubscriptionData,
};
