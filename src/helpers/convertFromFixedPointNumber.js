import BigNumber from 'bignumber.js';
import { numberToPlainString } from './numberToPlainString';

export const convertFromFixedPointNumber = (number, decimals) =>
  numberToPlainString(new BigNumber(number).dividedBy(10 ** Number(decimals)).toString());
