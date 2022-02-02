import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './LastTransactions.scss';
import clsx from 'clsx';
import Paginator from '../paginator/Paginator';
import { ethers } from 'ethers';
import token from '../../abi/token';
import lp from '../../abi/lp';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import BigNumber from 'bignumber.js';
import { calculateMaxFractionDigits } from '../../helpers/calculateMaxFractionDigits';

const parseLog = (
  log,
  primaryTokenDecimals,
  v1TokenDecimals,
  currentBlock,
  currentBlockTime,
  v1TokenSymbol,
  primaryTokenSymbol,
  version,
  timestamp,
) => {
  const obj = {
    version: version,
    primaryTokenSymbol,
    secondaryTokenSymbol: v1TokenSymbol,
    type: log.args.amount1Out.gt(0) ? 'SELL' : 'BUY',
    tokensNum: log.args.amount1Out.gt(0)
      ? new BigNumber(log.args.amount0In.toString())
          .dividedBy(Math.pow(10, primaryTokenDecimals))
          .toString()
      : new BigNumber(log.args.amount0Out.toString())
          .dividedBy(Math.pow(10, primaryTokenDecimals))
          .toString(),
    priceNum: log.args.amount1Out.gt(0)
      ? new BigNumber(log.args.amount1Out.toString())
          .dividedBy(Math.pow(10, v1TokenDecimals))
          .toString()
      : new BigNumber(log.args.amount1In.toString()).dividedBy(
          Math.pow(10, v1TokenDecimals).toString(),
        ),
    pricePerTokenNum: 0,
    pricePerToken: 0,
    block: log.blockNumber,
    hash: log.transactionHash || '0x0000000000000000',
    logIndex: log.logIndex,
    // debug: `amount0In: ${log.args.amount0In.toString()} | amount0Out: ${log.args.amount0Out.toString()} | amount1In: ${log.args.amount1In.toString()} | amount1Out: ${log.args.amount1Out.toString()}`
  };
  if (timestamp === 0) {
    obj.datetime = moment(currentBlockTime)
      .subtract((currentBlock - log.blockNumber) * 3, 'seconds')
      .format('DD-MM-YYYY HH:mm:ss');
    obj.time = moment(currentBlockTime)
      .subtract((currentBlock - log.blockNumber) * 3, 'seconds')
      .format('HH:mm:ss');
  } else {
    obj.datetime = moment(timestamp, 'X').format('DD-MM-YYYY HH:mm:ss');
    obj.time = moment(timestamp, 'X').format('HH:mm:ss');
  }
  if (v1TokenSymbol !== 'WBNB') {
    obj.pricePerTokenNum = new BigNumber(obj.tokensNum).dividedBy(obj.priceNum).toString();
    obj.pricePerToken =
      Number(obj.pricePerTokenNum).toLocaleString('en', {
        maximumFractionDigits: calculateMaxFractionDigits(obj.pricePerTokenNum),
        minimumFractionDigits: 8,
      }) +
      ' ' +
      v1TokenSymbol;
  } else {
    obj.pricePerTokenNum = new BigNumber(obj.priceNum).dividedBy(obj.tokensNum).toString();
    obj.pricePerToken =
      Number(obj.pricePerTokenNum).toLocaleString('en', {
        maximumFractionDigits: calculateMaxFractionDigits(obj.pricePerTokenNum),
        minimumFractionDigits: 8,
      }) +
      ' ' +
      v1TokenSymbol;
  }
  // obj.pricePerTokenNum = new BigNumber(obj.priceNum).dividedBy(obj.tokensNum).toString();
  // obj.pricePerToken = Number(obj.pricePerTokenNum).toLocaleString('en', { maximumFractionDigits: 9, minimumFractionDigits: 8 }) + ' ' + v1TokenSymbol
  obj.price =
    Number(obj.priceNum).toLocaleString('en', {
      maximumFractionDigits: 9,
      minimumFractionDigits: 8,
    }) +
    ' ' +
    v1TokenSymbol;
  obj.tokens =
    Number(obj.tokensNum).toLocaleString('en', {
      maximumFractionDigits: 9,
      minimumFractionDigits: 8,
    }) +
    ' ' +
    primaryTokenSymbol;
  return obj;
};

const LastTransactions = ({ tokenAddress, contract, v1contract, v2contract }) => {
  const [page, setPage] = useState(0);
  const [elements, setElements] = useState([]);
  const [pts, setPTS] = useState(null);
  const [loading, setLoading] = useState(false);
  const limit = 7;
  const interval = useRef(null);
  const [bnbusdRate, setBnbusdRate] = useState(1);

  const trim = (str) => {
    if (str.length > 10) {
      return '...' + str.substring(str.length - 10);
    }
  };

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/binancecoin')
      .then((res) => res.json())
      .then((res) => {
        setBnbusdRate(res.market_data.current_price.usd);
      })
      .catch(console.error);

    if (interval.current) clearInterval(interval.current);

    async function init() {
      if (contract !== null) {
        try {
          setLoading(true);

          setElements([]);
          console.time('Start first get blockchain data');
          const provider = new ethers.providers.JsonRpcProvider(
            'https://bsc-dataseed.binance.org/',
            56,
          );
          const batchProvider = new ethers.providers.JsonRpcBatchProvider(
            'https://bsc-dataseed.binance.org/',
            56,
          );

          const v1 = new ethers.Contract(contract, lp, provider);
          // const v2 = new ethers.Contract(v2contract, lp, provider);

          // const primaryToken = new ethers.Contract(tokenAddress, token, batchProvider)
          const [parentTokenAddress0, parentTokenAddress1] = await Promise.all([
            v1.token0(),
            v1.token1(),
          ]);

          const token0 = new ethers.Contract(parentTokenAddress0, token, batchProvider);
          const token1 = new ethers.Contract(parentTokenAddress1, token, batchProvider);

          const [token0Symbol, token0Decimals, token1Symbol, token1Decimals] = await Promise.all([
            token0.symbol(),
            token0.decimals(),
            token1.symbol(),
            token1.decimals(),
          ]);

          // const primaryTokenDecimals = await primaryToken.decimals()
          // const primaryTokenSymbol = await primaryToken.symbol()

          setPTS(token0Symbol);

          // const v1ParentTokenAddress = await v1.token1()
          // const v1ParentToken = new ethers.Contract(v1ParentTokenAddress, token, batchProvider)
          // const [v1TokenDecimals, v1TokenSymbol] = await Promise.all([
          //   v1ParentToken.decimals(),
          //   v1ParentToken.symbol()
          // ])
          // const v1TokenDecimals = await v1ParentToken.decimals()
          // const v1TokenSymbol = await v1ParentToken.symbol()

          // get logs and parse

          // const currentBlock = await provider.getBlockNumber();
          const block = await provider.getBlock('latest');

          // console.log('currentBlock', currentBlock, block);

          const currentBlockTime = block !== null ? moment(block.timestamp, 'X') : moment();
          let lastBlock = block.number;

          const v1Logs = await v1.queryFilter(
            ethers.utils.id('Swap(address,uint256,uint256,uint256,uint256,address)'),
            block.number - 3000,
            block.number,
          );
          // const v2Logs = await v2.queryFilter(ethers.utils.id('Swap(address,uint256,uint256,uint256,uint256,address)'), currentBlock - 1000, currentBlock)

          // Get blocks of all logs
          // const blocks = await Promise.all(v1Logs.map(log => batchProvider.getBlock(log.blockNumber)));

          let toAdd = [];
          // toAdd = [...toAdd, ...v1Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, currentBlock, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v1', 0)).filter(el => isFinite(el.pricePerTokenNum))]
          // toAdd = [...toAdd, ...v1Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, block.number, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v1', blocks.find(b => b.number === log.blockNumber).timestamp)).filter(el => isFinite(el.pricePerTokenNum))]
          // toAdd = [...toAdd, ...v2Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, currentBlock, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v2'))]

          toAdd = v1Logs
            .map((log) =>
              parseLog(
                log,
                token0Decimals,
                token1Decimals,
                block.number,
                currentBlockTime,
                token1Symbol,
                token0Symbol,
                'v1',
                0,
              ),
            )
            .filter((el) => isFinite(el.pricePerTokenNum))
            .sort((a, b) => b.block - a.block);

          const event = new CustomEvent('txHistory', { detail: toAdd });
          document.dispatchEvent(event);

          if (toAdd.length > 0) {
            // const event2 = new CustomEvent('lastPrice', {
            //   detail: {
            //     currency: 'USD',
            //     price: toAdd[0].pricePerTokenNum * bnbusdRate,
            //   }
            // });
            // document.dispatchEvent(event2);
          }

          console.timeEnd('Start first get blockchain data');

          setLoading(false);
          // setElements(v1Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, block.number, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v1', blocks.find(b => b.number === log.blockNumber).timestamp)).filter(el => isFinite(el.pricePerTokenNum)).sort((a, b) => b.block - a.block));
          setElements(toAdd);

          // TODO: Optymalizacja
          // Interval update
          interval.current = setInterval(async () => {
            console.time('Update last events');
            // const currentBlock = await provider.getBlockNumber();
            const block = await provider.getBlock('latest');
            const currentBlockTime = block !== null ? moment(block.timestamp, 'X') : moment();

            // console.log('currentBlock', currentBlock, block);

            const v1Logs = await v1.queryFilter(
              ethers.utils.id('Swap(address,uint256,uint256,uint256,uint256,address)'),
              lastBlock,
              block.number,
            );
            // const v2Logs = await v2.queryFilter(ethers.utils.id('Swap(address,uint256,uint256,uint256,uint256,address)'), lastBlock+1, currentBlock)

            // const logs = await fetch('https://bsc-dataseed.binance.org/', {
            //   method: 'POST',
            //   headers: {
            //     'content-type': 'application/json',
            //   },
            //   body: JSON.stringify({
            //     id: 1,
            //     jsonrpc: '2.0',
            //     method: 'eth_getLogs',
            //     params: [
            //       {
            //         address: contract,
            //         fromBlock: ethers.utils.hexValue(lastBlock),
            //         toBlock: ethers.utils.hexValue(block.number),
            //         topics: [
            //           ethers.utils.id('Swap(address,uint256,uint256,uint256,uint256,address)')
            //         ]
            //       }
            //     ]
            //   })
            // })

            lastBlock = block.number;

            // const blocks = await Promise.all(v1Logs.map(log => provider.getBlock(log.blockNumber)));
            // const blocks = await Promise.all(v1Logs.map(log => batchProvider.getBlock(log.blockNumber)));

            let toAdd = [];
            // toAdd = [...toAdd, ...v1Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, block.number, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v1', blocks.find(b => b.number === log.blockNumber).timestamp))]
            // toAdd = [...toAdd, ...v2Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, currentBlock, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v2'))]

            // toAdd = v1Logs.map(log => parseLog(log, primaryTokenDecimals, v1TokenDecimals, block.number, currentBlockTime, v1TokenSymbol, primaryTokenSymbol, 'v1', blocks.find(b => b.number === log.blockNumber).timestamp))
            toAdd = v1Logs.map((log) =>
              parseLog(
                log,
                token0Decimals,
                token1Decimals,
                block.number,
                currentBlockTime,
                token1Symbol,
                token0Symbol,
                'v1',
                0,
              ),
            );

            setElements((prev) => {
              const newElements = [...prev, ...toAdd].sort((a, b) => b.block - a.block);
              const event = new CustomEvent('txHistory', { detail: newElements });
              document.dispatchEvent(event);

              // if (newElements.length > 0) {
              //   const event2 = new CustomEvent('lastPrice', {
              //     detail: {
              //       currency: 'USD',
              //       price: newElements[0].pricePerTokenNum * bnbusdRate,
              //     }
              //   });
              //   document.dispatchEvent(event2);
              // }

              return newElements;
            });

            console.timeEnd('Update last events');
          }, 1000 * 10);
        } catch (error) {
          setLoading(false);
          console.error('ERROR:', 'rpc node', error);
        }
      }
    }

    init();

    return () => {
      clearInterval(interval.current);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);

  return (
    <div className="LastTransactions">
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th className="text-center">Tokens</th>
              <th className="text-center">Price</th>
              <th className="text-center">price/token</th>
              <th className="text-center">Time</th>
              <th className="text-center">Tx</th>
              <th></th>
            </tr>
          </thead>
          {loading && (
            <tbody>
              <tr>
                <td colSpan={8}>Loading...</td>
              </tr>
            </tbody>
          )}
          {!loading && (
            <tbody>
              {elements.length === 0 && (
                <tr>
                  <td colSpan={8}>Not found last transactions in last time</td>
                </tr>
              )}
              {elements
                .filter((el) => el.primaryTokenSymbol === pts)
                .slice(page * limit, (page + 1) * limit)
                .map((element, index) => (
                  <tr key={`LastTransactions${index}`}>
                    <td></td>
                    <td
                      className={clsx({
                        type: true,
                        success: element.type === 'BUY',
                        danger: element.type === 'SELL',
                      })}
                    >
                      {element.type}
                    </td>
                    <td className="text-center">{element.tokens}</td>
                    <td className="text-center">
                      {element.price}
                      <br />
                      <small className="help-text">
                        {Number(element.tokensNum * bnbusdRate).toLocaleString('en', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </small>
                    </td>
                    <td className="text-center">
                      {element.pricePerToken}
                      <br />
                      <small className="help-text">
                        {/* TODO: Dodać parsowanie number */}
                        {Number(element.pricePerTokenNum * bnbusdRate).toLocaleString('en', {
                          style: 'currency',
                          currency: 'USD',
                          maximumFractionDigits: calculateMaxFractionDigits(
                            element.pricePerTokenNum * bnbusdRate,
                            8,
                          ),
                          minimumFractionDigits: 8,
                        })}
                      </small>
                    </td>
                    <td className="text-center">{element.time}</td>
                    <td className="text-center">
                      <a
                        href={`https://bscscan.com/tx/${element.hash}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {trim(element.hash)}
                      </a>
                    </td>
                    <td></td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
      <Paginator current={page} setPage={setPage} pageLimit={limit} elements={elements.length} />
    </div>
  );
};

LastTransactions.propTypes = {
  // v1contract: PropTypes.string.isRequired(),
  // v2contract: PropTypes.string.isRequired(),
};

export default LastTransactions;
