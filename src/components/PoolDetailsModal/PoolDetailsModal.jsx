import BigNumber from 'bignumber.js';
import Button from '../Button/Button';
import { Modal } from '../Modal/Modal';

import './PoolDetailsModal.scss';
import { useFetchLastLiquidity } from './useFetchLastLiquidity';

const trim = (str) => {
  if (str.length > 10) {
    return '...' + str.substring(str.length - 10);
  }
};

const PoolDetailsModal = ({ pool, onClose }) => {
  const { lastLiquidity, pending } = useFetchLastLiquidity(pool);

  return (
    pool && (
      <Modal toggleModal={onClose} width="1000px">
        <div className="pool-modal__wrapper">
          <h3 className="pool-modal__heading">
            {pool.token0Info?.symbol}/{pool.token1Info?.symbol}
          </h3>
          <h4 className="pool-modal__secondary-heading">Last transactions</h4>
          {lastLiquidity ? (
            <div className="pool-modal__tableWrapper">
              <table className="pool-modal__table">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">Type</th>
                    <th className="text-center">{pool.token0Info?.symbol}</th>
                    <th className="text-center">{pool.token1Info?.symbol}</th>
                    <th className="text-center">Liquidity</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Hash</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {lastLiquidity.map((tx) => (
                    <tr key={tx?.hash}>
                      <td></td>
                      <td
                        style={{ color: tx.type === 'Add' ? 'green' : 'red' }}
                        className="text-center"
                      >
                        {tx.type}
                      </td>
                      <td className="text-center">{tx.token0Amount}</td>
                      <td className="text-center">{tx.token1Amount}</td>
                      <td>
                        $
                        {new BigNumber(
                          new BigNumber(tx.token0Amount).multipliedBy(pool.token0Info.usdRate || 0),
                        )
                          .plus(
                            new BigNumber(tx.token1Amount).multipliedBy(
                              pool.token1Info.usdRate || 0,
                            ),
                          )
                          .toFixed(2)}
                      </td>
                      <td>{tx.datetime}</td>
                      <td>
                        <a
                          href={`https://bscscan.com/tx/${tx.hash}`}
                          target="_blank"
                          rel="noreferrer"
                          className="pool-modal__link"
                        >
                          {trim(tx.hash)}
                        </a>
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {pending && (
                <>
                  <p className="text-center mt-4 pool-modal__no-transactions">
                    Loading
                    <div
                      class="spinner-border text-warning"
                      role="status"
                      style={{ width: 16, height: 16, marginLeft: 10 }}
                    >
                      {/* <span class="sr-only">Loading...</span> */}
                    </div>
                  </p>
                </>
              )}
              {lastLiquidity.length === 0 && !pending ? (
                <p className="text-center mt-4 pool-modal__no-transactions">
                  There have been no transactions recently
                </p>
              ) : null}
            </div>
          ) : null}
          <div className="d-flex justify-content-end">
            <Button onClick={onClose} className="pool-modal__close-button">
              Close
            </Button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default PoolDetailsModal;
