import { ethers } from 'ethers';
import config, { isDev } from '../config';
import subscriptionsAbi from '../abi/subscriptions';
import { convertFromFixedPointNumber } from '../helpers/convertFromFixedPointNumber';
import { signer } from '../actions/wallet.actions';
import { approveToken } from './token.service';

const jsonRpcProvider = new ethers.providers.JsonRpcBatchProvider(
  isDev() ? 'https://data-seed-prebsc-1-s1.binance.org:8545/' : 'https://bsc-dataseed.binance.org/',
);

const SubscriptionContract = new ethers.Contract(
  config.SUBSCRIPTIONS_CONTRACT_ADDRESS,
  subscriptionsAbi,
  jsonRpcProvider,
);

const getPrice = async () => {
  const [price] = await SubscriptionContract.functions.amount();

  return convertFromFixedPointNumber(price.toString(), 18);
};

const getPeriod = async () => {
  const [period] = await SubscriptionContract.functions.period();

  return period.toNumber();
};

const checkSubscription = async (address) => {
  const [subscription] = await SubscriptionContract.functions.subscriptions(address);

  return subscription.toNumber();
};

const buySubscription = async () => {
  if (signer) {
    const SubscriptionContract = new ethers.Contract(
      config.SUBSCRIPTIONS_CONTRACT_ADDRESS,
      subscriptionsAbi,
      signer,
    );

    const price = await getPrice();

    await approveToken(
      config.T_CAKE_ADDRESS,
      config.SUBSCRIPTIONS_CONTRACT_ADDRESS,
      price,
      config.T_CAKE_DECIMALS,
    );

    const tx = await SubscriptionContract.populateTransaction.subscribe();

    const sentTx = await signer.sendTransaction(tx);

    return await sentTx.wait();
  } else {
    throw new Error('Wallet not connected');
  }
};

export const SubscriptionService = {
  getPrice,
  getPeriod,
  checkSubscription,
  buySubscription,
};
