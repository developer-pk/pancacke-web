import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertActions from '../../actions/alertActions';
import BannerPlace from '../../components/BannerPlace/BannerPlace';
import WalletBar from '../../components/WalletBar/WalletBar';
import config from '../../config';
import usePaginator from '../../hooks/usePaginator';
import BigNumber from 'bignumber.js';
import './PoolExplorerPage.scss';
import clsx from 'clsx';
import { PoolExplorerDetails } from './PoolExplorerDetails/PoolExplorerDetails';
import Select, { components } from 'react-select';
import PoolDetailsModal from '../../components/PoolDetailsModal/PoolDetailsModal';
import Switch from '../../components/switch/Switch';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <i className="icon-search"></i>
  </components.DropdownIndicator>
);

export const PoolExplorerPage = () => {
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState([]);
  const [bnbusdRate, setBnbusdRate] = useState(1);
  const [tokenPriceCurrency, setTokenPriceCurrency] = useState('USD');
  const [selectedPool, setSelectedPool] = useState(null);
  const [version, setVersion] = useState('v2');

  const toggleVersion = () => setVersion((prev) => (prev === 'v2' ? 'v1' : 'v2'));

  const [searchInput, setSearchInput] = useState('');

  const { Paginator, page, limit, setElements } = usePaginator(15);
  const dispatch = useDispatch();

  const { subscriptionEndTimestamp, loggedIn } = useSelector((store) => store.Profile);

  const isSubscription = loggedIn && subscriptionEndTimestamp * 1000 > Date.now();

  const fetchData = async () => {
    setLoading(true);
    const filter = {
      limit,
      offset: page * limit,
      where: {
        version,
      },
    };

    let url = `${config.API_URL}/liquid-pool/all?filter=${JSON.stringify(filter)}`;

    if (searchInput.length > 0) {
      if (searchInput[0] === '0' && searchInput[1] === 'x') {
        url = `${config.API_URL}/liquid-pool/?address=${searchInput}&filter=${JSON.stringify(
          filter,
        )}`;
      } else {
        url = `${config.API_URL}/liquid-pool/?symbol=${searchInput}&filter=${JSON.stringify(
          filter,
        )}`;
      }
    }

    const response = await fetch(url);
    const json = await response.json();

    if (json.success) {
      setPools(json.data.lp);
      if (json.data.count) setElements(json.data.count.count);
      if (json.data.lpCount) setElements(json.data.lpCount.count);
    } else {
      dispatch(
        AlertActions.warning({
          heading: 'Error',
          message: 'Failed fetch information about liquidity pools',
        }),
      );
    }
    setLoading(false);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/binancecoin')
      .then((res) => res.json())
      .then((res) => {
        setBnbusdRate(res.market_data.current_price.usd);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchData();
  }, [page, version]);

  return (
    <div className="PoolExplorerPage">
      <WalletBar />

      {!isSubscription ? (
        <div className="row">
          <BannerPlace position="TOP" />
        </div>
      ) : null}

      <div className="row">
        <div className="col-12 mb-4 text-right d-block d-sm-flex justify-content-between align-items-center">
          <div className="d-flex">
            <p className="version-label">Version:</p>
            <Switch onChange={toggleVersion} checked={version === 'v2'} />
          </div>
          <form onSubmit={submitSearch} className="mt-2 mt-sm-0">
            <input type="text" onChange={onSearchChange} placeholder="Search by symbol/addr" />
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="Card">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Token</th>
                    <th className="text-center">Actions</th>
                    <th className="text-center">
                      Token Price {tokenPriceCurrency} (
                      <button
                        className="btn btn-link"
                        onClick={() => {
                          setTokenPriceCurrency((prev) => (prev === 'BNB' ? 'USD' : 'BNB'));
                        }}
                      >
                        {tokenPriceCurrency === 'BNB' ? 'USD' : 'BNB'}
                      </button>
                      )
                    </th>
                    <th className="text-center">Total liquidity</th>
                    {/* <th className="text-center">Pool Amount</th> */}
                    {/* <th className="text-center">Pool Variations</th> */}
                    <th className="text-center">Pool Remaining</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className={clsx({ loading })}>
                  {pools.map((pool) => (
                    <PoolExplorerDetails
                      pool={pool}
                      tokenPriceCurrency={tokenPriceCurrency}
                      bnbusdRate={bnbusdRate}
                      onClick={() => setSelectedPool(pool)}
                    />
                  ))}
                </tbody>
              </table>
              <Paginator />
            </div>
          </div>
        </div>
      </div>
      <PoolDetailsModal pool={selectedPool} onClose={() => setSelectedPool(null)} />
    </div>
  );
};
