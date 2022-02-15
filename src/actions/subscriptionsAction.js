import { SubscriptionsConstants } from '../constants/subscriptions.constants';
import { SubscriptionService } from '../services/subscription.service';
import history from '../history.js'

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
    history.push(`/pair-explorer/Tcake/0x3b831d36ed418e893f42d46ff308c326c239429f/v2`);
    console.log({ e });
  }
};

export const SubscriptionsActions = {
  getSubscriptionData,
};
