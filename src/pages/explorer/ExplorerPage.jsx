import clsx from 'clsx';
import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import Card from '../../components/card/Card';
import Chart from '../../components/chart/Chart';
import Favorite from '../../components/favorite/Favorite';
import LastTransactions from '../../components/LastTransactions/LastTransactions';
import SearchElement from '../../components/searchelement/SearchElement';
import './ExplorerPage.scss';
import Identicon from 'identicon.js';
import Switch from '../../components/switch/Switch';
// import BannerPlace from '../../components/BannerPlace/BannerPlace';
import config from '../../config';
import SocialNav from '../../components/socialnav/SocialNav';
import tcakeLogo from '../../assets/logom.png';
import WalletBar from '../../components/WalletBar/WalletBar';
import { ProfileActions } from '../../actions/profileActions';
import AlertActions from '../../actions/alertActions';
import PriceNotification from '../../components/PriceNotification/PriceNotification';
import FavouriteList from '../../components/FavouriteList/FavouriteList';
import { calculateMaxFractionDigits } from '../../helpers/calculateMaxFractionDigits';
import { ViewActions } from '../../actions/viewActions';
import { ethers } from 'ethers';
import HomeNavBar  from '../../components/HomeNavBar/HomeNavBar';
import Footer from '../../pages/common/Footer';
import { SERVICE_URL, DEFAULT_SERVICE_VERSION } from "../../constants/utility"
import Ads  from '../../components/Ads/Ads';
import Tabs  from '../../components/Tabs/Tabs';
const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <i className="icon-search"></i>
  </components.DropdownIndicator>
);

export const ExplorerPage = ({ theme }) => {
  const [tokens, setTokens] = useState([]);
  const [tokenPrice, setTokenPrice] = useState({ price: 0, currency: 'USD' });
  const [searchInput, setSearchInput] = useState('');
  const params = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [favouriteBtnDisabled, setFavouriteBtnDisabled] = useState(false);
  //const {ads} = useSelector(state=>state);
  const [tokenInfo, setTokenInfo] = useState({
    pair: 'BNB/TCAKE',
    name: 'TCAKE',
    address: '0x3b831d36ed418e893f42d46ff308c326c239429f',
    price: 0.1185,
    priceChange: 5,
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { favourites, subscriptionEndTimestamp, loggedIn } = useSelector((store) => store.Profile);

  const isSubscription = loggedIn && subscriptionEndTimestamp * 1000 > Date.now();

  const handleOnChangeToken = (selected) => {
    history.push(`/pair-explorer/${selected.value}/v2`);
  };

  const toggleVersion = (e) => {
    // e.preventDefault();
    if (params.version === 'v1' || params.version === undefined) {
      history.push(`/pair-explorer/${params.pair}/${params.contract}/v2`);
    } else {
      history.push(`/pair-explorer/${params.pair}/${params.contract}/v1`);
    }
  };

  const isFavourite = favourites?.some((id) => id === tokenInfo.id);

  const toggleFavourite = async () => {
    if (!isSubscription) {
      dispatch(
        AlertActions.warning({
          heading: "You don't have an active subscription!",
          message: `You need to buy the subscription.`,
          customButton: {
            label: 'My account',
            onClick: () => history.push('/my-account'),
          },
        }),
      );
      return;
    }
    setFavouriteBtnDisabled(true);
    try {
      if (isFavourite) {
        await fetch(`${config.API_URL}/favourites/${tokenInfo.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
          },
        });

        await dispatch(ProfileActions.updateProfile());

        dispatch(
          AlertActions.success({
            heading: 'Success!',
            message: `${tokenInfo.symbol} has unmarked as favourite!`,
          }),
        );
      } else {
        await fetch(`${config.API_URL}/favourites/${tokenInfo.id}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
          },
        });

        await dispatch(ProfileActions.updateProfile());

        dispatch(
          AlertActions.success({
            heading: 'Success!',
            message: `${tokenInfo.symbol} has marked as favourite!`,
          }),
        );
      }
    } catch (e) {
      dispatch(
        AlertActions.warning({
          heading: 'Error!',
          message: `Error has occured.`,
        }),
      );
    } finally {
      setFavouriteBtnDisabled(false);
    }
  };

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    dispatch(ViewActions.updateToken(params.pair, params.contract, params.version, '0x'));

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    const filter = {
      where: {
        or: [
          { symbol: { regexp: new RegExp(`.*${searchInput}.*`, 'i').toString() } },
          { contractAddress: { regexp: new RegExp(`.*${searchInput}.*`, 'i').toString() } },
          { v1PairAddress: { regexp: new RegExp(`.*${searchInput}.*`, 'i').toString() } },
          { v2PairAddress: { regexp: new RegExp(`.*${searchInput}.*`, 'i').toString() } },
        ],
      },
      order: 'v2TopPosition ASC',
      limit: 50,
    };
    fetch(`${config.API_URL}/tokens/search?filter=${JSON.stringify(filter)}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          console.log('tokens: ', res.data);
          setTokens(res.data);
        }
      });
  }, [searchInput]);

  useEffect(() => {
    const updatePairInfo = (inInterval = true) => {
      const filter = {
        where: {
          symbol: params.pair,
          contractAddress: params.contract,
        },
        limit: 1,
      };
      fetch(`${config.API_URL}/tokens/search?filter=${JSON.stringify(filter)}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.success && res.data.length > 0) {
            if (res.data[0].v1PairAddress === null) {
              history.push(`/pair-explorer/${params.pair}/${params.contract}/v2`);
            } else if (!res.data[0].v2PairAddress && params.version === 'v2') {
              history.push(`/pair-explorer/${params.pair}/${params.contract}/v1`);
            }

            const { symbol, contractAddress, v1PairAddress, v2PairAddress } = res.data[0];
            dispatch(
              ViewActions.updateToken(
                symbol,
                contractAddress,
                params.version,
                params.version === 'v2' ? v2PairAddress : v1PairAddress,
              ),
            );
            setTokenInfo(res.data[0]);
            if (!inInterval)
              setTokenPrice({
                price: Number(
                  params.version === 'v2' ? res.data[0].currentPriceV2 : res.data[0].currentPrice,
                ),
                currency: 'USD',
              });
          }
        });
    };
    updatePairInfo(false);

    const updatePrice = (e) => {
      setTokenPrice(e.detail);
    };

    const interval = setInterval(updatePairInfo, 1000 * 10);
    document.addEventListener('lastPrice', updatePrice);

    return () => {
      clearInterval(interval);
      document.removeEventListener('lastPrice', updatePrice);
    };
  }, [params.pair, params.contract]);

  const parsedCurrentPrice = useCallback(() => {
    return Number(tokenPrice.price).toLocaleString('en', {
      maximumFractionDigits: calculateMaxFractionDigits(tokenPrice.price, 8),
      minimumFractionDigits: 2,
    });
  }, [tokenPrice.price]);

  if (!ethers.utils.isAddress(params.contract)) {
    history.push('/pair-explorer/Tcake/0x3b831d36ed418e893f42d46ff308c326c239429f/v2');
  }

  return (
    <div className="ExplorerPage">
      <HomeNavBar />
      <WalletBar />

      {/* {!isSubscription ? (
        <div className="Row">
          <BannerPlace position="TOP" />
        </div>
      ) : null} */}

      {loggedIn && isSubscription ? (
        <div className="Row">
          <FavouriteList />
        </div>
      ) : null}

      <div className="Row">
        <Card>
          <Card.Header>TOKEN INFO:</Card.Header>
          <Card.Body>
             {/* <Select
              onInputChange={setSearchInput}
              classNamePrefix="react-select-custom"
              components={{
                DropdownIndicator,
              }}
              filterOption={() => true}
              onChange={handleOnChangeToken}
              value={null}
              options={tokens.reduce((acc, current) => {
                acc.push({
                  label: <SearchElement element={current} />,
                  value: current.symbol + '/' + current.contractAddress,
                });
                return acc;
              }, [])}
              styles={{
                input: (css) => ({
                  ...css,
                  width: '100%',

                  '> div': {
                    width: '100%',
                  },

                  input: {
                    width: '100% !important',
                    textAlign: 'left',
                  },
                }),
              }}
              placeholder="Search by symbol/addr"
            />   */}

            <div className="tokenInfo">
              <img
                src={`https://exchange.pancakeswap.finance/images/coins/${tokenInfo.contractAddress}.png`}
                onError={(e) => {
                  e.target.onError = null;
                  if (tokenInfo.contractAddress && tokenInfo.contractAddress.length >= 15) {
                    tokenInfo.symbol === 'Tcake'
                      ? (e.target.src = tcakeLogo)
                      : (e.target.src = `data:image/png;base64,${new Identicon(
                          tokenInfo.contractAddress,
                          200,
                        ).toString()}`);
                  }
                }}
                alt={tokenInfo.symbol}
              />
              <h2>{tokenInfo.symbol}</h2>
              <PriceNotification currentPrice={tokenPrice.price} symbol={tokenInfo.symbol} />
            </div>

            <div className="favouritePair">
              <h3>{tokenInfo.symbol}/BNB</h3>
              {loggedIn ? (
                <div>
                  <Favorite
                    onClick={toggleFavourite}
                    isFavourite={isFavourite && isSubscription}
                    disabled={favouriteBtnDisabled}
                    loading={favouriteBtnDisabled}
                  />
                </div>
              ) : null}
            </div>

            <hr />

            <div className="tokenPrice">
              <h1>
                PRICE: <br />
                {parsedCurrentPrice()}
                <small className="currency">{tokenPrice.currency}</small>
              </h1>
              <h3>
                Price 24H change:{' '}
                <span
                  className={clsx({
                    plus:
                      Number(
                        params.version === 'v2'
                          ? tokenInfo.last24hChangeV2
                          : tokenInfo.last24hChange,
                      ) >= 0,
                    minus:
                      Number(
                        params.version === 'v2'
                          ? tokenInfo.last24hChangeV2
                          : tokenInfo.last24hChange,
                      ) < 0,
                  })}
                >
                  {Number(
                    params.version === 'v2' ? tokenInfo.last24hChangeV2 : tokenInfo.last24hChange,
                  ) >= 0
                    ? '+'
                    : '-'}
                  {Math.abs(
                    Number(
                      params.version === 'v2' ? tokenInfo.last24hChangeV2 : tokenInfo.last24hChange,
                    ),
                  ).toFixed(2)}
                  %
                </span>
              </h3>
            </div>

            <hr />

            <div className="textWithSmallButton">
              <p>V1 / V2</p>
              <Switch
                onChange={toggleVersion}
                disabled={tokenInfo.v1PairAddress === null || tokenInfo.v2PairAddress === null}
                checked={params.version === 'v2'}
              />
            </div>

            <div className="textWithSmallButton">
              <p>PANCAKESWAP</p>
              <a
                href={`https://exchange.pancakeswap.finance/#/swap?outputCurrency=${tokenInfo.contractAddress}`}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Trade
              </a>
            </div>

            <div className="textWithSmallButton">
              <p>BSC Scan</p>
              <a
                href={`https://bscscan.com/token/${tokenInfo.contractAddress}`}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                View
              </a>
            </div>

            <div className="textWithSmallButton">
              <p>Media</p>
            </div>
            <SocialNav
              style={{ justifyContent: 'center' }}
              elements={[
                tokenInfo.website !== null && {
                  label: <i className="icon-globe" />,
                  href: tokenInfo.website,
                },
                tokenInfo.twitter !== null && {
                  label: <i className="icon-twitter" />,
                  href: tokenInfo.twitter,
                },
                tokenInfo.chat !== null && {
                  label: <i className="icon-telegram-1" />,
                  href: tokenInfo.chat,
                },
                tokenInfo.reddit !== null && {
                  label: <i className="icon-reddit" />,
                  href: tokenInfo.reddit,
                },
              ]}
            />
          </Card.Body>
        </Card>

        <Chart theme={theme} />
      </div>

      <div className="Row">
        {/* {windowWidth >= 1550 && !isSubscription && (
          <BannerPlace
            position="LEFT"
            style={{ maxWidth: 219, marginTop: 25, marginRight: 30, marginBottom: 0 }}
          />
        )} */}
        <div className="col-md-2">
           <Ads />
                            </div>
        <div className="col-md-7">
          <LastTransactions
            tokenAddress={tokenInfo.contractAddress}
            contract={params.version === 'v2' ? tokenInfo.v2PairAddress : tokenInfo.v1PairAddress}
            v1contract={tokenInfo.v1PairAddress}
            v2contract={tokenInfo.v2PairAddress}
          />
        </div>
        <div className="col-md-3">
        <Tabs />

        </div>
        {/* {windowWidth >= 1800 && !isSubscription && (
          <BannerPlace
            position="RIGHT"
            style={{ maxWidth: 219, marginTop: 25, marginLeft: 30, marginBottom: 0 }}
          />
        )} */}
      </div>

    </div>
  );
};
