import React, { useEffect, useContext, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import Button from '../Button/Button';
import './HomeNavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import useAuth from '../../hooks/useAuth';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import Select, { components } from 'react-select';
import config from '../../config';
import SearchElement from '../../components/searchelement/SearchElement';
import {
  Card,
  Checkbox,
  FormControlLabel,
  CircularProgress
} from '@material-ui/core'
import { Modal, Form } from "react-bootstrap";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import {getAds, deleteAds} from '../../actions/admin/ads/AdsActions'
import { useSelector } from 'react-redux'
import BigNumber from 'bignumber.js';
import highAlarm from '../../assets/high.ogg';
import lowAlarm from '../../assets/low.ogg';
import icon from '../../assets/logo.png';
import regex from '../../helpers/regexp';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: '#1A2038',
  },
  card: {
    maxWidth: 800,
    borderRadius: 12,
    margin: '1rem',
  },
}));

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <i className="icon-search"></i>
  </components.DropdownIndicator>
);
const HighAlarm = new Audio(highAlarm);
const LowAlarm = new Audio(lowAlarm);

HighAlarm.loop = true;
LowAlarm.loop = true;
const HomeNavBar = ({ currentPrice, symbol }) => {
  /**New search functionality */
  const [tokens, setTokens] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  const { login, logout } = useAuth();
  const handleOnChangeToken = (selected) => {
    history.push(`/pair-explorer/${selected.value}/v2`);
  };
  const { tokeninfo } = useSelector(state=>state);
  const [highPrice, setHighPrice] = useState(
    localStorage.getItem(`HIGH_PRICE_ALARM_${symbol}`) ?? '',
  );
  const [lowPrice, setLowPrice] = useState(localStorage.getItem(`LOW_PRICE_ALARM_${symbol}`) ?? '');
  const [highPriceNotificationSent, setHighPriceNotificationSent] = useState(false);
  const [lowPriceNotificationSent, setLowPriceNotificationSent] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (typing) return;

    if (new BigNumber(lowPrice).isGreaterThanOrEqualTo(currentPrice) && Number(lowPrice) !== 0) {
      LowAlarm.play();
      if (!lowPriceNotificationSent) {
        if (window.Notification) {
          if (Notification.permission === 'granted') {
            new Notification(`${symbol} dropped to ${lowPrice} USD`, {
              body: `Price: ${currentPrice} USD`,
              icon: icon,
            });
          } else if (
            Notification.permission !== 'denied' ||
            Notification.permission === 'default'
          ) {
            Notification.requestPermission(function (permission) {
              if (permission === 'granted') {
                new Notification(`${symbol} dropped to ${lowPrice} USD`, {
                  body: `Price: ${currentPrice} USD`,
                  icon: icon,
                });
              }
            });
          }

          setLowPriceNotificationSent(true);
        }
      }
    } else {
      LowAlarm.pause();
    }

    if (new BigNumber(currentPrice).isGreaterThanOrEqualTo(highPrice) && Number(highPrice) !== 0) {
      HighAlarm.play();
      if (!highPriceNotificationSent) {
        if (window.Notification) {
          if (Notification.permission === 'granted') {
            new Notification(`${symbol} reached ${highPrice} USD`, {
              body: `Price: ${currentPrice} USD`,
              icon: icon,
            });
          } else if (
            Notification.permission !== 'denied' ||
            Notification.permission === 'default'
          ) {
            Notification.requestPermission(function (permission) {
              if (permission === 'granted') {
                new Notification(`${symbol} reached ${highPrice} USD`, {
                  body: `Price: ${currentPrice} USD`,
                  icon: icon,
                });
              }
            });
          }
        }
        setHighPriceNotificationSent(true);
      }
    } else {
      HighAlarm.pause();
    }

    if (!lowPrice || Number(lowPrice) === 0) {
      LowAlarm.pause();
    }

    if (!highPrice || Number(highPrice) === 0) {
      HighAlarm.pause();
    }
  }, [
    currentPrice,
    lowPrice,
    highPrice,
    symbol,
    lowPriceNotificationSent,
    highPriceNotificationSent,
    typing,
  ]);

  useEffect(() => {
    setLowPrice(localStorage.getItem(`LOW_PRICE_ALARM_${symbol}`));
    setHighPrice(localStorage.getItem(`HIGH_PRICE_ALARM_${symbol}`));
    setHighPriceNotificationSent(false);
    setLowPriceNotificationSent(false);
  }, [symbol]);

  useEffect(() => {
    setTyping(true);
    setHighPriceNotificationSent(false);
    setLowPriceNotificationSent(false);

    const id = setTimeout(() => setTyping(false), 2000);

    return () => {
      clearTimeout(id);
    };
  }, [lowPrice, highPrice]);

  const handleHighPriceChange = (e) => {
    if (regex.NUMBER_COMMA_DOT.test(e.target.value)) {
      const value = e.target.value.replace(',', '.');
      localStorage.setItem(`HIGH_PRICE_ALARM_${symbol}`, value);
      setHighPrice(value);
    }
  };

  const handleLowPriceChange = (e) => {
    if (regex.NUMBER_COMMA_DOT.test(e.target.value)) {
      const value = e.target.value.replace(',', '.');
      localStorage.setItem(`LOW_PRICE_ALARM_${symbol}`, value);
      setLowPrice(value);
    }
  };

  const clearHighPrice = () => {
    localStorage.setItem(`HIGH_PRICE_ALARM_${symbol}`, '');
    setHighPrice('');
  };

  const clearLowPrice = () => {
    localStorage.setItem(`LOW_PRICE_ALARM_${symbol}`, '');
    setLowPrice('');
  };

  const clearBoth = () => {
    clearHighPrice();
    clearLowPrice();
  };

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

  const {
    isAuthenticated,
    // user
  } = useAuth();
  let authenticated = isAuthenticated;
 
  const [show, setShow] = useState(false);
  const [showLogin, setLoginShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
})
const [state, setState] = useState({})
  const handleLoginShow = (param) => {
    localStorage.setItem('icon-click', param);
    setLoginShow(true);
  };

  const handleLoginClose = () => setLoginShow(false);

  const handleLoginFormSubmit = async (event,values) => {
    console.log(userInfo,'yes there');
    await login(userInfo.email, userInfo.password)
    const role = localStorage.getItem('userRole');
    const iconGet = localStorage.getItem('icon-click');
    setLoginShow(false);

    if(iconGet == 'alert'){
        setShow(true);
    }
    
   toast.success("You are logged in successfully.");
    
}

const handleChange = ({ target: { name, value } }) => {
  setState({
      ...state,
      [name]: value,
  })
  let temp = { ...userInfo }
  temp[name] = value
  setUserInfo(temp);
}
  /**end */

  return (
    <div className="HomeNavBar">
      <nav className="navbar navbar-expand-lg text-uppercase " id="mainNav">
        <a className="navbar-brand" href="/token">
          <img src={process.env.PUBLIC_URL + '/images/logo-new.png'} alt="LOGO" />
        </a>
        <div className="search">
          <Select
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
            open
            styles={{
              input: (css) => ({
                ...css,
                /* expand the Input Component div */
                width: '100%',

                /* expand the Input Component child div */
                '> div': {
                  width: '100%',
                },

                /* expand the Input Component input */
                input: {
                  width: '100% !important',
                  textAlign: 'left',
                },
              }),
            }}
            placeholder="Search by symbol/addr"
          />
          {/* <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search BY SYMBOL / ADDRESS ...."
                            value={selectedSymbol}
                            onChange={handler}
                            onFocus={ onFocus }
                        />
                        {selectedSymbol && symbols.data.length > 0 ? <i className="fas fa-times pull-right clearsearchIcon" onClick={clearSymbol} /> :  <span
                                    className="paste-symbol pull-right"
                                    onClick={pasteSymbol}
                                >
                                    PASTE
                                </span>}
                        
   
                         {((symbols.data.length > 0 )
                         ? 
                        ( <ul id="show-search-symbols" className={showList}>
                        { symbols.data.map((val,index) => (
                                            <li
                                            key={index}
                                            data-src={val.id}
                                            value={val.id}
                                            onClick={() => handleSymbolInfo(val.address,val.symbol)}
                                            >
                                    <div className="search_listing">
                                    <div className="list_img">
                                 <img
                                        src={`https://pancakeswap.finance/images/tokens/${val.address}.png`}
                                        onError={(e) => {
                                        e.target.onError = null;
                                        if (val.address.length >= 15) {
                                            val.symbol === 'Tcake'
                                            ? (e.target.src = process.env.PUBLIC_URL + '/images/logo-new.png')
                                            : (e.target.src = process.env.PUBLIC_URL + '/images/Emoji_Icon_-_Thinking_large.webp');
                                        }
                                        }}
                                        alt={val.symbol} className="token-img-auto" 
                                />
                                    </div>
                                    <div className="list_text">
                                   <h5>{`${val.name} (${val.symbol})`}</h5>
                                        <h6>{`${val.address}`}</h6>
                                        </div></div>
                                            </li>
                                        ))}
                        </ul>) : (<div className={"MuiPaper-root MuiAutocomplete-paper MuiPaper-elevation1 MuiPaper-rounded "+showLoader}><div className="MuiAutocomplete-loading">Loading…</div></div>)

                        )} */}
        </div>
        <div className="collapse1 navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 adervitising" href="/">
                Advertising
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 icon" href="/">
                <img alt="img-text" src={process.env.PUBLIC_URL + '/images/pancake.png'} />
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              {authenticated ? (
                <button
                  type="button"
                  className="nav-link py-3 px-0 px-lg-3 button"
                  onClick={handleShow}
                >
                  Add Alert
                </button>
              ) : (
                <button
                  type="button"
                  className="nav-link py-3 px-0 px-lg-3 button login"
                  onClick={() => handleLoginShow('alert')}
                >
                  Add Alert
                </button>
              )}
            </li>
            {authenticated ? (
              <li>
                <a className="nav-link py-3 px-0 px-lg-3 icon" href="#" onClick={logout}>
                  Logout
                </a>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
      </nav>

      <Modal id="add_alert3" className="modal-popup-class" show={showLogin} onHide={handleLoginClose}>
            
            <Modal.Body>
            <i className="fas fa-times pull-right" onClick={handleLoginClose} />
            {/* <Modal.Header closeButton>
           
           </Modal.Header> */}
            <div className="alert_text2 text-center">
            <h4>LOGIN</h4>
            <ValidatorForm onSubmit={handleLoginFormSubmit}>
                            <TextValidator
                                className="mb-3 w-full"
                                variant="outlined"
                                size="small"
                                placeholder="Email"
                                onChange={handleChange}
                                type="email"
                                name="email"
                                value={userInfo.email}
                                validators={['required', 'isEmail']}
                                errorMessages={[
                                    'this field is required',
                                    'email is not valid',
                                ]}
                            />
                            <TextValidator
                                className="mb-3 w-full"
                                placeholder="Password"
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                name="password"
                                type="password"
                                value={userInfo.password}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <FormControlLabel
                                className="mb-3 min-w-288"
                                name="agreement"
                                onChange={handleChange}
                                control={
                                    <Checkbox
                                        size="small"
                                        onChange={({
                                            target: { checked },
                                        }) =>
                                            handleChange({
                                                target: {
                                                    name: 'agreement',
                                                    value: checked,
                                                },
                                            })
                                        }
                                        checked={userInfo.agreement || true}
                                    />
                                }
                                label="Remeber me"
                            />

                            {message && (
                                <p className="text-error">{message}</p>
                            )}

                            <div className="flex flex-wrap items-center mb-4">
                                <div className="relative">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={loading}
                                        type="submit"
                                    >
                                        Sign in
                                    </Button>
                                    {loading && (
                                        <CircularProgress
                                            size={24}
                                            className={
                                                classes.buttonProgress
                                            }
                                        />
                                    )}
                                </div>
                                <span className="mr-2 ml-5">or</span>
                                <Button
                                    className="capitalize"
                                    onClick={() =>
                                        history.push('/signup')
                                    }
                                >
                                    Sign up
                                </Button>
                            </div>
                            <Button
                                className="text-primary"
                                onClick={() =>
                                    history.push('/session/forgot-password')
                                }
                            >
                                Forgot password?
                            </Button>
                        </ValidatorForm>
                        </div>
            </Modal.Body>
        </Modal>

        <Modal id="add_alert2" className="modal-popup-class" show={show} onHide={handleClose}>
            
            <Modal.Body>
            <i className="las la-times pull-right" onClick={handleClose} />
            {/* <Modal.Header closeButton>
           
           </Modal.Header> */}
            <div className="alert_text2 text-center">
                            <img alt="img-text" src={process.env.PUBLIC_URL + "/images/noti.png"} />
                            <h4>Set up an alarm For {(tokeninfo.data.symbol ? '('+tokeninfo.data.symbol+')' : '(BNB)'  )}</h4>
                            <h5>{(tokeninfo.data.address ? tokeninfo.data.address : '')}</h5>
                            <form className="alarm-modal__form" onSubmit={(e) => e.preventDefault()}>
            <div className="alarm-modal__input-container">
              {/* <label className="alarm-modal__input-label" htmlFor="high-price">
                High Price:
              </label> */}
              <div className="alarm-modal__flex">
                <input
                  className="alarm-modal__input"
                  id="high-price"
                  value={highPrice}
                  onChange={handleHighPriceChange}
                  placeholder="High price..."
                />
                <button className="alarm-modal__btn" onClick={clearHighPrice}>
                  Clear
                </button>
              </div>
            </div>
            <div className="alarm-modal__input-container">
              {/* <label className="alarm-modal__input-label" htmlFor="low-price">
                Low Price:
              </label> */}
              <div className="alarm-modal__flex">
                <input
                  className="alarm-modal__input"
                  id="low-price"
                  value={lowPrice}
                  onChange={handleLowPriceChange}
                  placeholder="Low price..."
                />
                <button className="alarm-modal__btn" onClick={clearLowPrice}>
                  Clear
                </button>
              </div>
            </div>
            <div className="alarm-modal__footer-btn-container">
              <button className="alarm-modal__btn" onClick={clearBoth}>
                Clear All
              </button>
              <button className="alarm-modal__btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
                        </div>
            </Modal.Body>
        </Modal>
    </div>
  );
};

export default connect()(HomeNavBar);
