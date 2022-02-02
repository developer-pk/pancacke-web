import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ProfileConstants, WalletConstants } from '../constants';
import AlertActions from '../actions/alertActions';
import store from '../helpers/store';
import config from '../config';
import { ProfileActions } from './profileActions';
import { getTokenBalance } from '../services/token.service';
import * as Sentry from '@sentry/browser';

export const ConnectMethods = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT',
};

export let provider = null;
export let signer = null;

const DisconnectWallet = () => (dispatch) => {
  provider = null;
  signer = null;
  dispatch({ type: WalletConstants.DISCONNECT_WALLET });
  Sentry.configureScope((scope) => scope.setUser(null));
};

const prepareEthersPayloadForSigning = (rawMessage, wc = false) => {
  if (!wc) return rawMessage;
  const rawMessageLength = new Blob([rawMessage]).size;
  let message = ethers.utils.toUtf8Bytes(
    '\x19Ethereum Signed Message:\n' + rawMessageLength + rawMessage,
  );
  message = ethers.utils.keccak256(message);
  return ethers.utils.arrayify(message);
};

const connectByWeb3Provider = async (_provider, wc = false) => {
  provider = await new ethers.providers.Web3Provider(_provider);

  const network = await provider.getNetwork();
  signer = await provider.getSigner();
  const address = await signer.getAddress();
  const balance = await signer.getBalance();

  let jwtRes;
  try {
    const response = await fetch(config.API_URL + `/users/login?public_address=${address}`, {
      method: 'GET',
    }).then((res) => res.json());

    const signature = await signer.signMessage(
      prepareEthersPayloadForSigning(response.data.authCode, wc),
    );

    jwtRes = await fetch(config.API_URL + `/users/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        publicAddress: address,
        signature,
      }),
    }).then((res) => res.json());

    if (!jwtRes.success) {
      throw new Error(jwtRes.errors?.data?.auth_code);
    }

    sessionStorage.setItem('jwt', jwtRes.data.authToken);

    store.dispatch(ProfileActions.checkSubscription(address));

    store.dispatch({
      type: ProfileConstants.UPDATE_PROFILE,
      payload: jwtRes.data,
    });

    const tcakeBalance = await getTokenBalance(
      config.T_CAKE_ADDRESS,
      config.T_CAKE_DECIMALS,
      address,
    );

    store.dispatch({
      type: WalletConstants.CONNECT_WALLET,
      payload: {
        address,
        chainId: network.chainId,
        balance: Number(balance.toString()) / 10 ** 18,
        tcakeBalance,
      },
    });
    Sentry.setUser({
      wallet: address,
      chainId: network.chainId,
      balance: Number(balance.toString()) / 10 ** 18,
      tcakeBalance,
    });
  } catch (error) {
    store.dispatch(
      AlertActions.warning({
        heading: 'Error',
        message: error.message ?? error,
      }),
    );
  }
};

const ConnectByEthereumProvider = async () => {
  if (!window.ethereum) {
    throw new Error('No provider was found.');
  }

  try {
    store.dispatch({ type: WalletConstants.LOADING_WALLET });

    await window.ethereum.enable();

    window.ethereum.on('accountsChanged', async (accounts) => {
      const [address] = accounts;

      if (address) {
        connectByWeb3Provider(window.ethereum);
      }
    });

    window.ethereum.on('chainChanged', async () => {
      connectByWeb3Provider(window.ethereum);
    });

    window.ethereum.on('disconnect', () => {
      store.dispatch(DisconnectWallet);
    });

    connectByWeb3Provider(window.ethereum);
    return true;
  } catch (error) {
    console.error(error);
    store.dispatch(DisconnectWallet());
    throw new Error('Something goes wrong. Please try again.');
  }
};

const ConnectByWalletConnect = async () => {
  try {
    const wcprovider = new WalletConnectProvider({
      rpc: {
        // 1: 'https://mainnet.infura.io/v3/' + config.INFURA_KEY,
        // 4: 'https://rinkeby.infura.io/v3/' + config.INFURA_KEY,
        56: 'https://bsc-dataseed.binance.org/',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      },
      chainId: 56,
    });

    store.dispatch({ type: WalletConstants.LOADING_WALLET });

    await wcprovider.enable();

    wcprovider.on('accountsChanged', async (accounts) => {
      const [address] = accounts;

      if (address) {
        connectByWeb3Provider(wcprovider, true);
      }
    });

    wcprovider.on('chainChanged', async () => {
      connectByWeb3Provider(wcprovider, true);
    });

    wcprovider.on('disconnect', () => {
      store.dispatch(DisconnectWallet);
    });

    connectByWeb3Provider(wcprovider, true);
    return true;
  } catch (error) {
    console.error(error);
    store.dispatch(DisconnectWallet());
    throw new Error('Something goes wrong. Please try again.');
  }
};

const refreshTcakeBalance = () => async (dispatch, getState) => {
  try {
    const { Wallet } = getState();

    if (Wallet.address) {
      const tcakeBalance = await getTokenBalance(
        config.T_CAKE_ADDRESS,
        config.T_CAKE_DECIMALS,
        Wallet.address,
      );

      dispatch({
        type: WalletConstants.REFRESH_TCAKE_BALANCE,
        payload: tcakeBalance,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

const WalletAction = {
  DisconnectWallet,
  refreshTcakeBalance,
};

export const WalletHelper = {
  ConnectByEthereumProvider,
  ConnectByWalletConnect,
};

export default WalletAction;
