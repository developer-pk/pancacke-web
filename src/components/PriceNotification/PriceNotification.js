import React, { useEffect, useState } from 'react';
import highAlarm from '../../assets/high.ogg';
import lowAlarm from '../../assets/low.ogg';
import icon from '../../assets/logo.png';

import Bell from '../Bell/Bell';
import regex from '../../helpers/regexp';

import './PriceNotification.scss';

// import { Modal } from '../Modal/Modal';
import BigNumber from 'bignumber.js';
import useAuth from '../../hooks/useAuth'
import { toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { getAlertTokenInfo } from '../../actions/frontend/TokenApiActions'
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import {createAlert} from '../../actions/common/AlertActions'

const HighAlarm = new Audio(highAlarm);
const LowAlarm = new Audio(lowAlarm);

HighAlarm.loop = true;
LowAlarm.loop = true;

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
      background: '#1A2038',
  },
  card: {
      maxWidth: 800,
      borderRadius: 12,
      margin: '1rem',
  },
}))
const PriceNotification = ({ currentPrice, symbol }) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [highPrice, setHighPrice] = useState(
    localStorage.getItem(`HIGH_PRICE_ALARM_${symbol}`) ?? '',
  );
  const [lowPrice, setLowPrice] = useState(localStorage.getItem(`LOW_PRICE_ALARM_${symbol}`) ?? '');
  const [highPriceNotificationSent, setHighPriceNotificationSent] = useState(false);
  const [lowPriceNotificationSent, setLowPriceNotificationSent] = useState(false);
  const [typing, setTyping] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    // user
} = useAuth()

  let authenticated = isAuthenticated
  const [state, setState] = useState({})
  const { login, logout } = useAuth();
  const [show, setShow] = useState(false);
  const { tokeninfo, alertoken } = useSelector(state=>state);
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

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
    getData();
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
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
})
  const handleChange = ({ target: { name, value } }) => {
    setState({
        ...state,
        [name]: value,
    })
    let temp = { ...userInfo }
    temp[name] = value
    setUserInfo(temp);
}

  const [showLogin, setLoginShow] = useState(false);
  const [openAlert,setRemoveAlertState] = React.useState(false)
  const handleLoginShow = (param) => {
    localStorage.setItem('icon-click', param)
    setLoginShow(true);
}
const handleLoginClose = () => setLoginShow(false);
const handleLoginFormSubmit = async (event,values) => {
  await login(userInfo.email, userInfo.password)
  const role = localStorage.getItem('userRole');
  const iconGet = localStorage.getItem('icon-click');
  setLoginShow(false);

  if(iconGet == 'alert'){
      setShow(true);
  }
  
 toast.success("You are logged in successfully.");
  // if(tokeninfo.data.address){
  //     dispatch(getAlertTokenInfo(tokeninfo.data.address));
  // }else{
  //     dispatch(getAlertTokenInfo('0x3b831d36ed418e893f42d46ff308c326c239429f'));
  // }
  
}

const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//Remove Alert
const  handleAlertRemoveOpen = () => {
  setRemoveAlertState(true);
};
const  handleAlertRemoveClose = () => {
  setRemoveAlertState(false);
};
const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
     // console.log(res.data);
      setIP(res.data.IPv4)
  }
const handleAlarmClose = () => {

  const symbol =  (tokeninfo.data.symbol ? tokeninfo.data.symbol : 'Tcake');
  const tokenAddress =  (tokeninfo.data.address ? tokeninfo.data.address : '0x3b831d36ed418e893f42d46ff308c326c239429f');
  const params = {highPrice:highPrice,lowPrice:lowPrice,status:'active',currencySymbol:symbol,ip:ip,currencytoken:tokenAddress};
  dispatch(createAlert(params));
  dispatch(getAlertTokenInfo(tokenAddress));
  
  setState({highPrice:'',lowPrice:''});
  setShow(false);

}
  const isActive = (highPrice && Number(highPrice) > 0) || (lowPrice && Number(lowPrice) > 0);
console.log(isModalVisible,'is modal');
  return (
    <>
      {/* {authenticated ? <Bell className="" isActive={isActive} onClick={() => setModalVisibility(true)} /> 
        : 
        (<div><Bell isActive={isActive} onClick={() => handleLoginShow('alert')} />
        
        
        </div>
        )
      } */}

{(authenticated ? 
      (alertoken.length > 0 && alertoken[1].alert == true? 
          <a
          className="nav-link"
          href="#"
          onClick={() => handleAlertRemoveOpen()}
      >  
       <img className="bell-filled" src={process.env.PUBLIC_URL + "/images/bell.png"} /> 
      {/* <button
      className='Bell isActive'>
      <i className="icon-bell"></i>
    </button> */}

{/* <FontAwesomeIcon icon={['fas', 'bell']} /> */}
      </a> :
      <a
      className="nav-link"
      href="#"
      onClick={handleShow}
  >
        {/* <button
      className='Bell'>
      <i className="icon-bell"></i>
    </button>
       */}

       <FontAwesomeIcon icon={['fas', 'bell']} />
  </a>
      )
      :
      (alertoken.length > 0 && alertoken[1].alert == true ? 
          <a className="nav-link" href="#" onClick={() => handleLoginShow('alert')}> 
               <img className="bell-filled" src={process.env.PUBLIC_URL + "/images/bell.png"} /> 
              {/* <button
      className='Bell isActive'>
      <i className="icon-bell"></i>
    </button> */}
    {/* <FontAwesomeIcon icon={['fas', 'bell']} /> */}
          </a> :
          <a className="nav-link" href="#" onClick={() => handleLoginShow('alert')}> 
             {/* <button
      className='Bell'>
      <i className="icon-bell"></i>
    </button> */}
    <FontAwesomeIcon icon={['fas', 'bell']} />
          </a>
      )
      
  )}
  <Modal id="add_alert3" className="modal-popup-class" show={showLogin} onHide={handleLoginClose}>
            
            <Modal.Body>
            <FontAwesomeIcon className="pull-right" icon={['fas', 'times']} onClick={handleLoginClose} />
            {/* <i className="fas fa-times pull-right" onClick={handleLoginClose} /> */}
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
                                    history.push('/forgot-password')
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
            <FontAwesomeIcon className="pull-right" icon={['fas', 'times']} onClick={handleClose} />
            {/* <i className="fas la-times pull-right" onClick={handleClose} /> */}
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
              <button className="alarm-modal__btn" onClick={handleAlarmClose}>
                Close
              </button>
            </div>
          </form>
                        </div>
            </Modal.Body>
        </Modal>
      {/* {isModalVisible && (
        <Modal id="alertmodal" toggleModal={() => setModalVisibility(false)}>
          <h3 className="alarm-modal__heading">Set up an alarm</h3>
          <form className="alarm-modal__form" onSubmit={(e) => e.preventDefault()}>
            <div className="alarm-modal__input-container">
              <label className="alarm-modal__input-label" htmlFor="high-price">
                High Price:
              </label>
              <div className="alarm-modal__flex">
                <input
                  className="alarm-modal__input"
                  id="high-price"
                  value={highPrice}
                  onChange={handleHighPriceChange}
                />
                <button className="alarm-modal__btn" onClick={clearHighPrice}>
                  Clear
                </button>
              </div>
            </div>
            <div className="alarm-modal__input-container">
              <label className="alarm-modal__input-label" htmlFor="low-price">
                Low Price:
              </label>
              <div className="alarm-modal__flex">
                <input
                  className="alarm-modal__input"
                  id="low-price"
                  value={lowPrice}
                  onChange={handleLowPriceChange}
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
              <button className="alarm-modal__btn" onClick={() => setModalVisibility(false)}>
                Close
              </button>
            </div>
          </form>
        </Modal>
      )} */}


    </>
  );
};

export default PriceNotification;
