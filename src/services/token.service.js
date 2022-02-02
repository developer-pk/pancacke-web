import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import ERC20Abi from '../abi/erc20';
import { signer } from '../actions/wallet.actions';
import { isDev } from '../config';
import { convertToFixedPointNumber } from '../helpers/convertToFixedPointNumber';

const jsonRpcProvider = new ethers.providers.JsonRpcBatchProvider(
  isDev() ? 'https://data-seed-prebsc-1-s1.binance.org:8545/' : 'https://bsc-dataseed.binance.org/',
);

export const approveToken = async (tokenAddress, address, tokenAmount, tokenDecimals) => {
  const tokenContract = new ethers.Contract(tokenAddress, ERC20Abi, signer);
  const from = await signer.getAddress();
  const [decimals] = await Promise.all([
    tokenDecimals || tokenContract.functions.decimals(),
    tokenContract.functions.allowance(from, address),
  ]);

  const approveTx = await tokenContract.populateTransaction.approve(
    address,
    convertToFixedPointNumber(tokenAmount, decimals),
  );

  const approveSent = await signer.sendTransaction(approveTx);

  return approveSent.wait();
};

export const getTokenDecimals = async (tokenAddress) => {
  const tokenContract = new ethers.Contract(tokenAddress, ERC20Abi, jsonRpcProvider);
  const decimals = await tokenContract.functions.decimals();
  return decimals;
};

export const getTokenBalance = async (tokenAddress, tokenDecimals, fromAddress) => {
  try {
    let decimals = tokenDecimals;

    if (!decimals) {
      decimals = await getTokenDecimals(tokenAddress);
    }

    const tokenContract = new ethers.Contract(tokenAddress, ERC20Abi, jsonRpcProvider);
    const from = fromAddress || (await signer.getAddress());
    const balance = await tokenContract.balanceOf(from);
    return new BigNumber(balance.toString()).dividedBy(10 ** decimals);
  } catch {
    return 0;
  }
};
