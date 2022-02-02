import React from 'react';
import BigNumber from 'bignumber.js';
import config from '../../../config';
import './PoolExplorerDetails.scss';

export const PoolExplorerDetails = ({ pool, tokenPriceCurrency, bnbusdRate, onClick }) => {
  const calcPriceInBNB = (pool) => {
    if (pool.token0.toLowerCase() === config.WBNB_ADDRESS.toLowerCase()) {
      return new BigNumber(pool.liquidityToken0).div(pool.liquidityToken1);
    }
    return new BigNumber(pool.liquidityToken1).div(pool.liquidityToken0);
  };

  const calcTotalLiquidity = (pool) => {
    const tokenPriceInBNB = calcPriceInBNB(pool);
    let liquidity = new BigNumber(0);
    if (pool.token0.toLowerCase() === config.WBNB_ADDRESS.toLowerCase()) {
      liquidity = liquidity.plus(new BigNumber(pool.liquidityToken0).multipliedBy(bnbusdRate));
    } else {
      liquidity = liquidity.plus(
        new BigNumber(pool.liquidityToken0).multipliedBy(tokenPriceInBNB).multipliedBy(bnbusdRate),
      );
    }
    if (pool.token1.toLowerCase() === config.WBNB_ADDRESS.toLowerCase()) {
      liquidity = liquidity.plus(new BigNumber(pool.liquidityToken1).multipliedBy(bnbusdRate));
    } else {
      liquidity = liquidity.plus(
        new BigNumber(pool.liquidityToken1).multipliedBy(tokenPriceInBNB).multipliedBy(bnbusdRate),
      );
    }
    return liquidity;
  };

  return (
    <tr key={pool.id} className="pool-item" onClick={onClick}>
      <td></td>
      <td>
        {pool.token0Info?.symbol} / {pool.token1Info?.symbol}
      </td>
      {/* <td>{pool.token0Info?.symbol === 'WBNB' ? pool.token1Info?.symbol : pool.token0Info?.symbol}</td> */}
      <td>
        <a
          href={`https://exchange.pancakeswap.finance/#/swap?outputCurrency=${
            pool.token0.toLowerCase() === config.WBNB_ADDRESS.toLowerCase()
              ? pool.token1
              : pool.token0
          }`}
          target="_blank"
          rel="noopener noreferrer"
          className="action-link"
          onClick={(e) => e.stopPropagation()}
        >
          Trade
        </a>
        <a
          href={`https://exchange.pancakeswap.finance/#/add/${pool.token0}/${pool.token1}`}
          target="_blank"
          rel="noopener noreferrer"
          className="action-link"
          onClick={(e) => e.stopPropagation()}
        >
          Add
        </a>
        <a
          href={`https://exchange.pancakeswap.finance/#/pool`}
          target="_blank"
          rel="noopener noreferrer"
          className="action-link"
          onClick={(e) => e.stopPropagation()}
        >
          Remove
        </a>
      </td>
      <td>
        {tokenPriceCurrency === 'USD' && '$'}
        {new BigNumber(calcPriceInBNB(pool))
          .multipliedBy(tokenPriceCurrency === 'BNB' ? 1 : bnbusdRate)
          .toFixed(tokenPriceCurrency === 'BNB' ? 18 : 8)}
      </td>
      <td>${calcTotalLiquidity(pool).toFixed(18)}</td>
      {/* <td>-</td> */}
      {/* <td>-</td> */}
      <td>
        {new BigNumber(
          pool.token0.toLowerCase() === config.WBNB_ADDRESS.toLowerCase()
            ? pool.liquidityToken0
            : pool.liquidityToken1,
        ).toFixed(18)}{' '}
        BNB
      </td>
      <td>
        <i className="icon-search icon" />
      </td>
      <td></td>
    </tr>
  );
};
