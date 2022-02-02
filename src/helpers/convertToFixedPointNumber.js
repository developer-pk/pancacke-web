import BigNumber from 'bignumber.js';
import { numberToPlainString } from './numberToPlainString';

export const convertToFixedPointNumber = (number, decimals) =>
  numberToPlainString(
    new BigNumber(number).multipliedBy(Math.pow(10, Number(decimals))).toString(),
  );
