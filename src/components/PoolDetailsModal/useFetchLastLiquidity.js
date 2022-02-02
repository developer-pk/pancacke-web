import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import lpAbi from '../../abi/lp';
import ERC20Abi from '../../abi/erc20';
import moment from 'moment';
import { convertFromFixedPointNumber } from '../../helpers/convertFromFixedPointNumber';
import BigNumber from 'bignumber.js';

const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/', 56);
const batchProvider = new ethers.providers.JsonRpcBatchProvider(
  'https://bsc-dataseed.binance.org/',
  56,
);

const parseLog = (
  { args, transactionHash, blockNumber, event, topics, data },
  token0Decimals,
  token1Decimals,
  currentBlock,
  currentBlockTime,
) => {
  const methods = {
    Mint: ethers.utils.id('Mint(address,uint256,uint256)'),
    Burn: ethers.utils.id('Burn(address,uint256,uint256,address)'),
  };
  const abiInterface = new ethers.utils.Interface(ERC20Abi);

  const { amount0, amount1 } = abiInterface.decodeEventLog(
    topics[0] === methods.Mint ? 'Mint' : 'Burn',
    data,
  );

  return {
    token0Amount: new BigNumber(
      convertFromFixedPointNumber(amount0.toString(), token0Decimals),
    ).toFixed(4),
    token1Amount: new BigNumber(
      convertFromFixedPointNumber(amount1.toString(), token1Decimals),
    ).toFixed(4),
    datetime: moment(currentBlockTime)
      .subtract((currentBlock - blockNumber) * 3, 'seconds')
      .format('DD-MM-YYYY HH:mm:ss'),
    time: moment(currentBlockTime)
      .subtract((currentBlock - blockNumber) * 3, 'seconds')
      .format('HH:mm:ss'),
    hash: transactionHash,
    type: topics[0] === methods.Mint ? 'Add' : 'Remove',
  };
};

export const useFetchLastLiquidity = (pool) => {
  const [lastLiquidity, setLastLiquidity] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (pool?.address) {
      const fetchlastLiquidity = async () => {
        setPending(true);
        const block = await provider.getBlock('latest');
        const currentBlockTime = block !== null ? moment(block.timestamp, 'X') : moment();
        let lastBlock = block.number;

        const token0Contract = new ethers.Contract(pool.token0, ERC20Abi, batchProvider);
        const token1Contract = new ethers.Contract(pool.token1, ERC20Abi, batchProvider);

        const [token0Decimals, token1Decimals] = await Promise.all([
          token0Contract.decimals(),
          token1Contract.decimals(),
        ]);

        const blocksToSearch = 10000;

        try {
          const poolContract = new ethers.Contract(pool.address, lpAbi, batchProvider);
          const promises = [];
          for (let i = 0; i < Math.floor(blocksToSearch / 2000); i++) {
            const filter = {
              address: pool.address,
              topics: [
                [
                  ethers.utils.id('Mint(address,uint256,uint256)'),
                  ethers.utils.id('Burn(address,uint256,uint256,address)'),
                ],
              ],
            };

            promises.push(
              poolContract.queryFilter(
                filter,
                block.number - 2000 * (i + 1),
                block.number - 2000 * i,
              ),
            );
          }
          const logs = await Promise.all(promises);
          setLastLiquidity(
            logs
              .flat()
              .sort((logA, logB) => logB.blockNumber - logA.blockNumber)
              .slice(0, 5)
              .map((log) =>
                parseLog(log, token0Decimals, token1Decimals, lastBlock, currentBlockTime),
              ),
          );
        } catch (e) {
          console.error(e);
        }

        setPending(false);
      };

      fetchlastLiquidity();
    }

    return () => {
      setLastLiquidity([]);
    };
  }, [pool?.address]);

  return { lastLiquidity, pending };
};
