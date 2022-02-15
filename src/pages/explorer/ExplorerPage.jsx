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
import MobileTabs  from '../../components/Tabs/MobileTabs';
import useAuth from '../../hooks/useAuth'
import AddToFav from '../../components/AddToFav/AddToFav';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileChart from '../../components/chart/MobileChart';

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
  const [openRem,setConfirmRemoveState] = React.useState(false)
  const [open,setConfirmState] = React.useState(false)
  const [showLogin, setLoginShow] = useState(false);
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

  const {
    isAuthenticated,
    // user
} = useAuth()

  let authenticated = isAuthenticated
  const  handleClickOpen = () => {
    setConfirmState(true);
  };
  const handleLoginShow = (param) => {
    localStorage.setItem('icon-click', param)
    setLoginShow(true);
}
const handleLoginClose = () => setLoginShow(false);
  const {alertoken, tokenotherinfo} = useSelector(state=>state);

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
      try{ 
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
      } catch(e) { 
        console.error(e,'failed to fetch');
       }

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

      //Remove Fav
      const  handleFavRemoveOpen = () => {
        setConfirmRemoveState(true);
      };
      const  handleFavRemoveClose = () => {
        setConfirmRemoveState(false);
    };

    const [copied, setCopy] = useState(false);

    const [getAddress, setAddress] = React.useState('0x3b831d36ed418e893f42d46ff308c326c239429f')

  return (
    <div className="ExplorerPage">
<HomeNavBar currentPrice={tokenPrice.price} symbol={tokenInfo.symbol} />
<div className="mobile_area top_bar dropdown">
            <div className="Mobile_head">
            <ul>
                <li className="ada_logo"> 
                    <a className="nav-link" href="#">
             
              
              <img
              className="img-text"
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
                        <b> <span>{tokenInfo.symbol}</span>
                        </b>
                    </a>
                </li>
                
                <li>
                <div className="price">
                    <h5>
                    PRICE: ${parsedCurrentPrice()}
                    </h5>
                   
                
                </div>

            </li>
            <li>
                <p>24H {Number(
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
                        {/* <span>+5%</span> */}
                </p>
            </li>
            <li>
                <div className="token_info">
                    <h5>TOKEN INFO <a id="info" className="token-info-toggle" data-toggle="collapse" href="#myContent" role="button" aria-expanded="false" aria-controls="myContent"> 
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                        </a></h5>
                


                        

                   
                </div>
            </li>
         </ul>

                  
                                
    </div>

     <div id="myContent" className="collapse multi-collapse" aria-labelledby="info">
     <h4>TOKEN INFO:</h4>
     <div className="copy_text token_infoo">
                                    <div className="copy left_side">
                                    {(tokenInfo.contractAddress ? tokenInfo.contractAddress.substring(0, 18)+'... ' : '0x3ee2......435d47')}
                                        {(tokenInfo.contractAddress) ? 
                                        <CopyToClipboard text={tokenInfo.contractAddress}
                                            onCopy={() => setCopy(true)}>
                                            <span><FontAwesomeIcon icon={['fas', 'copy']} /></span>
                                            </CopyToClipboard> : <CopyToClipboard text='0x3ee2f7d3d7f4s435d47 '
                                            onCopy={() => setCopy(true)}>
                                            <span><FontAwesomeIcon icon={['fas', 'copy']} /></span>
                                            </CopyToClipboard>
                                        }
                                            {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                                    
                                       
</div>
                                       <div className="right_side">
<ul className="nav">
                                    <li className="nav-item alert_icon">
                                    <AddToFav />
              
              <PriceNotification currentPrice={tokenPrice.price} symbol={tokenInfo.symbol} />
                                    </li>
                                </ul>
                                       </div>

                                    </div>
                                    {/* <div className="market_cap token_infoo">
                                    <div className="left_side">
                                        <p>
                                            MARKET CAP:{' '}
                                            {tokenotherinfo.data.values ? 
                                               // tokenotherinfo[0].data.map((token, index) =>
                                                <NumberFormat value={tokenotherinfo.data.values.USD.marketCap} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                                            //)
                                                : <span>$399,578.08</span> }
                                            
                                        </p>
                                        <p>
                                            VOLUME 24H:{' '}
                                            {tokenotherinfo.data.values ? 
                                                //tokenotherinfo[0].data.map((token, index) =>
                                                <NumberFormat value={tokenotherinfo.data.values.USD.volume24h} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                            
                                                : <span>N/A</span> }
                                        </p>
                                        </div>

                                    <div className="right_side">
                                        <p>
                                            TOTAL SUPPLY:{' '}
                                            {tokenotherinfo.data.totalSupply ? 
                                                //tokenotherinfo[0].data.map((token, index) =>
                                                <span className="number">{tokenotherinfo.data.totalSupply}</span>
                                            //)
                                                : <span><NumberFormat value='178,499,565.878013' displayType={'text'} thousandSeparator={true} decimalScale={2} /></span> }
                                            
                                        </p>
                                        <p>
                                            LIQUIDITY: <span>N/A</span>
                                        </p>
                                    </div>
                                    </div> */}

                                    <div className="pans">
                                    <div className="token_infoo">
                                    <div className="left_side">
                                        <p>
                                            PANCAKESWAP <a href={"https://pancakeswap.finance/swap#/swap?outputCurrency="+tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f"}>TRADE</a>
                                        </p>
                                        </div>

                                    <div className="right_side">
                                        <p className="tag_btn">
                                            <img
                                                alt="img-text"
                                                src={process.env.PUBLIC_URL + "/images/bscscan.png"}
                                            />{' '}
                                            BSC SCAN{' '}
                                            <div className="dropdown trade_sub">
                                                <a className="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VIEW{' '} <FontAwesomeIcon icon={['fas', 'angle-down']} />
                                                                                        </a>
                                            
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <a className="dropdown-item" target="_blank" href={"https://bscscan.com/txs?a="+(tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f")}>Transfers</a>
                                                <a className="dropdown-item" target="_blank" href={"https://bscscan.com/token/tokenholderchart/"+(tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f")}>Holders</a>
                                                <a className="dropdown-item" target="_blank" href={"https://bscscan.com/address/"+(tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f")}>Contracts</a>
                                            </div>
                                            </div>
                                            {/* <a href="https://bscscan.com/token/0x3b831d36ed418e893f42d46ff308c326c239429f">
                                                TRADE{' '}
                                                <i className="fas fa-angle-down"></i>
                                            </a> */}
                                        </p>
                                        </div>
                                        </div>
                                        <p className="media_icon">
                                            MEDIA
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
                                        </p>
                                    </div> 
                    </div>

                    <nav>
                    <div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="home_chart" role="tabpanel" aria-labelledby="home_chart_menu">
    <div id="cruncy-chart">
    <MobileChart theme={theme} />
           
    </div>
  </div>
  <div className="tab-pane fade" id="home_trade" role="tabpanel" aria-labelledby="home_trade_menu">
  <div className="pricing-table">
                            <Card>
                            <LastTransactions
            tokenAddress={tokenInfo.contractAddress}
            contract={params.version === 'v2' ? tokenInfo.v2PairAddress : tokenInfo.v1PairAddress}
            v1contract={tokenInfo.v1PairAddress}
            v2contract={tokenInfo.v2PairAddress}
          />
                                </Card>
                                </div>
  </div>
  <div className="tab-pane fade" id="home_promo" role="tabpanel" aria-labelledby="home_promo_menu">
<div className="promo_tab">
                   <MobileTabs />
                                </div>
  </div>
</div>
  <div className="nav nav-tabs chart_tab" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="home_chart_menu" data-toggle="tab" href="#home_chart" role="tab" aria-controls="home_chart" aria-selected="true">Chart</a>
    <a className="nav-item nav-link" id="home_trade_menu" data-toggle="tab" href="#home_trade" role="tab" aria-controls="nav-profile" aria-selected="false">Trades</a>
    <a className="nav-item nav-link" id="home_promo_menu" data-toggle="tab" href="#home_promo" role="tab" aria-controls="nav-contact" aria-selected="false">promoted</a>
  </div>
</nav>

<div className="sidebar_div mobile_add">
              <Ads />
      </div>
</div>
      
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

      <div className="Row desktop_view">
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
            {/* {(authenticated ? 
                (alertoken.length > 0 && alertoken[1].favorite == true ? 
                    <a className="nav-link" href="#" onClick={() => handleFavRemoveOpen()}>
                        <img className="heart-filled" src={process.env.PUBLIC_URL + "/images/heart.png"} />
                    </a> :
                    <a className="nav-link" href="#" onClick={() => handleClickOpen()}>
                       <i className="lar la-heart"></i>
                    </a>
                )
                :
                (alertoken.length > 0 && alertoken[1].favorite == true? 
                    <a className="nav-link" href="#" onClick={() => handleLoginShow('heart')}> 
                        <img className="heart-filled" src={process.env.PUBLIC_URL + "/images/heart.png"} />
                    </a> :
                    <a className="nav-link" href="#" onClick={() => handleLoginShow('heart')}> 
                        <i className="lar la-heart " />
                    </a>
                )
            )} */}
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
             {/* <img
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
              /> */}
              <h2>{tokenInfo.symbol}</h2>
             
            </div>
            <div className="Row">

              <li class="nav-item alert_icon">
                <AddToFav />
              
              <PriceNotification currentPrice={tokenPrice.price} symbol={tokenInfo.symbol} />
              </li>
           
             
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
            <div className="price">
              <h5>PRICE: <span>${parsedCurrentPrice()}</span></h5>
            <p>PRICE 24h CHANGE: <span>  
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
                  %</span></p></div>
              {/* <h1>
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
              </h3> */}
            </div>

            <div className="copy left_side">
                                        {/* 0x3ee2......435d47{' '} */}
                                        {(tokenInfo.contractAddress ? tokenInfo.contractAddress.substring(0, 18)+'... ' : '0x3ee2......435d47')}
                                        {(tokenInfo.contractAddress) ? 
                                        <CopyToClipboard text={tokenInfo.contractAddress}
                                            onCopy={() => setCopy(true)}>
                                            <span><FontAwesomeIcon icon={['fas', 'copy']} /></span>
                                            </CopyToClipboard> : <CopyToClipboard text='0x3ee2f7d3d7f4s435d47 '
                                            onCopy={() => setCopy(true)}>
                                            <span><FontAwesomeIcon icon={['fas', 'copy']} /></span>
                                            </CopyToClipboard>
                                        }
                                            {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                                    
                                       
</div>

            <hr />

            <div className="textWithSmallButton pair-address">
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
            <div className="right_side">
                                        <p className="tag_btn">
                                            <img
                                                alt="img-text"
                                                src={process.env.PUBLIC_URL + "/images/bscscan.png"}
                                            />{' '}
                                            BSC SCAN{' '}
                                            <div className="dropdown trade_sub">
                                                <a className="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VIEW{' '} <FontAwesomeIcon icon={['fas', 'angle-down']} />
                                                                                        </a>
                                            
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <a className="dropdown-item" target="_blank" href={"https://bscscan.com/txs?a="+(tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f")}>Transfers</a>
                                                <a className="dropdown-item" target="_blank" href={"https://bscscan.com/token/tokenholderchart/"+(tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f")}>Holders</a>
                                                <a className="dropdown-item" target="_blank" href={"https://bscscan.com/address/"+(tokenInfo.contractAddress ? tokenInfo.contractAddress : "0x3b831d36ed418e893f42d46ff308c326c239429f")}>Contracts</a>
                                            </div>
                                            </div>
                                            {/* <a href="https://bscscan.com/token/0x3b831d36ed418e893f42d46ff308c326c239429f">
                                                TRADE{' '}
                                                <i className="fas fa-angle-down"></i>
                                            </a> */}
                                        </p>
                                        </div>
              {/* <p>BSC Scan</p>
              <a
                href={`https://bscscan.com/token/${tokenInfo.contractAddress}`}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                View
              </a> */}
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

      <div className="Row desktop_view">
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
