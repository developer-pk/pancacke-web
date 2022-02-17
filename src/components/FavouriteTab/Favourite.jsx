import React, { useEffect, useContext, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import './Favourite.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import {getFavouriteList} from '../../actions/frontend/TokenApiActions'
import { useSelector } from 'react-redux'
import { SERVICE_URL, DEFAULT_SERVICE_VERSION } from "../../constants/utility"
import useAuth from '../../hooks/useAuth';
import { Modal, Form } from "react-bootstrap";
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import {
  Card,
  Checkbox,
  FormControlLabel,
  Button,
  CircularProgress
} from '@material-ui/core'
import { useHistory, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


const Favourite = ({ dispatch }) => {
  /**Promoted Tokens functionality */
  const history = useHistory();
  const [showLogin, setLoginShow] = useState(false);
  const { favourite } = useSelector(state=>state);
  const [state, setState] = useState({})
  const { login, logout } = useAuth();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const classes = useStyles()
  const {
    isAuthenticated,
    // user
  } = useAuth();
  let authenticated = isAuthenticated;
  useEffect(() => {
    if(authenticated){
      dispatch(getFavouriteList());
  }
    
}, [])

const handleLoginShow = (param) => {
  localStorage.setItem('icon-click', param);
  setLoginShow(true);
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


const handleLoginClose = () => setLoginShow(false);
const handleLoginFormSubmit = async (event,values) => {
  await login(userInfo.email, userInfo.password)
  const role = localStorage.getItem('userRole');
  const iconGet = localStorage.getItem('icon-click');
  setLoginShow(false);

  if(role == 'admin'){
      history.push('/ads');
  }

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
  /**end */

  return (
    <ul>

{ authenticated ? 
      (favourite[0] ? 
      favourite[0].data.map((fav, index) =>
          <li>
          <span className="pro_check">
              {' '}
              <img
                  alt="img-text"
                  src={process.env.PUBLIC_URL + "/images/check.png"}
              />
          </span>{' '}
          <span className="pro_title">
              {fav.currencySymbol}
          </span>{' '}
          |{' '}
          <span className="pro_price">
          {fav.currencytoken.substr(0,32)+'...'}
          </span>
      </li>
      ) :  <h6>No Records.</h6> )
  : <div className="sise_title text-center"><span><a href="#" onClick={() => handleLoginShow()}>Login</a></span></div>

  }

<Modal id="add_alert3" className="modal-popup-class" show={showLogin} onHide={handleLoginClose}>
            
            <Modal.Body>
            <FontAwesomeIcon className="pull-right" icon={['fas', 'times']} onClick={handleLoginClose} />
            {/* <i className="las la-times pull-right" onClick={handleLoginClose} /> */}
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
    </ul>

  );
};

export default connect()(Favourite);
