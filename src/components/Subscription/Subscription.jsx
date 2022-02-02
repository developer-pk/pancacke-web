import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countdown from 'react-countdown';

import logo from '../../assets/logo.png';
import { SubscriptionService } from '../../services/subscription.service';
import Button from '../Button/Button';

import './Subscription.scss';
import AlertActions from '../../actions/alertActions';
import { isDev } from '../../config';
import { ProfileActions } from '../../actions/profileActions';
import { secondsToDhms } from '../../helpers/secondsToDhms';
import { Redirect } from 'react-router-dom';
import BigNumber from 'bignumber.js';
import WalletAction from '../../actions/wallet.actions';

const Subscription = () => {
  const { subscriptionEndTimestamp, loggedIn } = useSelector((store) => store.Profile);
  const { address, tcakeBalance } = useSelector((store) => store.Wallet);
  const subscription = useSelector((store) => store.Subscriptions);
  const [buyingInProgress, setBuingInProgress] = useState(false);
  const dispatch = useDispatch();

  const handleBuySubscription = async () => {
    setBuingInProgress(true);
    try {
      const { transactionHash } = await SubscriptionService.buySubscription();
      dispatch(ProfileActions.checkSubscription(address));
      dispatch(
        AlertActions.success({
          heading: 'Success!',
          message: `You have bought a subscription!`,
          customButton: transactionHash
            ? {
                label: 'View on Bscscan',
                onClick: () =>
                  window.open(
                    `https://${
                      isDev() ? 'testnet.bscscan.com' : 'bscscan.com'
                    }/tx/${transactionHash}`,
                    '_blank',
                  ),
              }
            : undefined,
        }),
      );
    } catch (e) {
      dispatch(
        AlertActions.warning({
          heading: 'Error!',
          message: e?.message ?? 'Error has occured.',
        }),
      );
      console.log({ e });
    } finally {
      setTimeout(() => setBuingInProgress(false), 100);
      dispatch(WalletAction.refreshTcakeBalance());
    }
  };

  if (!loggedIn) {
    return <Redirect to="/pair-explorer/Tcake/v2" />;
  }

  const insufficientBalance = new BigNumber(tcakeBalance).isLessThan(subscription?.price || 0);

  return (
    <div className="subscriptionCard">
      <img src={logo} alt="T CAKE logo" className="subscriptionCard__logo" />
      {subscriptionEndTimestamp * 1000 > Date.now() ? (
        <>
          <p className="subscriptionCard__label">Bought subscription ends:</p>
          <Countdown date={subscriptionEndTimestamp * 1000} />
          <Button
            className="subscriptionCard__button"
            onClick={handleBuySubscription}
            disabled={buyingInProgress || insufficientBalance}
            loading={buyingInProgress}
          >
            {insufficientBalance ? 'Insufficient TCAKE balance' : 'Extend subscription'}
          </Button>
          <p className="subscriptionCard__period">
            {secondsToDhms(subscription?.period)} for {subscription?.price} TCAKE
          </p>
        </>
      ) : (
        <>
          <p className="subscriptionCard__label">Buy subscription</p>
          <p className="subscriptionCard__price">Price: {subscription?.price} TCAKE</p>
          <Button
            className="subscriptionCard__button"
            onClick={handleBuySubscription}
            disabled={buyingInProgress || insufficientBalance}
            loading={buyingInProgress}
          >
            {insufficientBalance ? 'Insufficient TCAKE balance' : 'Buy'}
          </Button>
          <p className="subscriptionCard__period">{secondsToDhms(subscription?.period)}</p>
        </>
      )}
    </div>
  );
};

export default Subscription;
