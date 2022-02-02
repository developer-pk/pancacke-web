import { WalletConstants } from '../constants';

const initialState = {
  connected: false,
  address: undefined,
  chainId: undefined,
  balance: undefined,
  tcakeBalance: undefined,
  loading: false,
};

const WalletReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WalletConstants.CONNECT_WALLET:
      return {
        connected: true,
        address: payload.address,
        chainId: payload.chainId,
        balance: payload.balance,
        tcakeBalance: payload.tcakeBalance,
        loading: false,
      };
    case WalletConstants.LOADING_WALLET:
      return { ...state, loading: true };
    case WalletConstants.REFRESH_TCAKE_BALANCE:
      return { ...state, tcakeBalance: payload };
    case WalletConstants.DISCONNECT_WALLET:
      return initialState;

    default:
      return state;
  }
};

export default WalletReducer;
