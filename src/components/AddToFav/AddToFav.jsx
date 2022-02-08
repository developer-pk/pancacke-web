import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth'
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getAlertTokenInfo, addTokenInFavourite, removeTokenFromFavourite } from '../../actions/frontend/TokenApiActions'
import './Favorite.scss';

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
const AddToFav = () => {

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
  const { alertoken, tokeninfo , tokenotherinfo} = useSelector(state=>state);
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [openRem,setConfirmRemoveState] = React.useState(false)
  const [open,setConfirmState] = React.useState(false)
  const [getAddress, setAddress] = React.useState('0x3b831d36ed418e893f42d46ff308c326c239429f')
  const bnbToken = '0x3b831d36ed418e893f42d46ff308c326c239429f';
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

 //Remove Fav
 const  handleFavRemoveOpen = () => {
    setConfirmRemoveState(true);
  };
  const  handleFavRemoveClose = () => {
    setConfirmRemoveState(false);
};
const  handleClickOpen = () => {
    setConfirmState(true);
  };
const  handleConfirmClose = () => {
    setConfirmState(false);
};

const handleAgree = () => {
    const symbol =  (tokenotherinfo.data.symbol ? tokenotherinfo.data.symbol : 'Tcake');
    const tokenAddress =  (getAddress ? getAddress : '0x3b831d36ed418e893f42d46ff308c326c239429f');
    dispatch(addTokenInFavourite({currencySymbol:symbol,currencytoken:tokenAddress,status:'active'}))
    dispatch(getAlertTokenInfo(tokenAddress));
    
    handleConfirmClose();
  };
  const handleDisagree = () => {
    console.log("I do not agree.");
    handleConfirmClose();
  };

  const handleFavRemoveAgree = () => {
    const tokenAddress =  (getAddress ? getAddress : '0x3b831d36ed418e893f42d46ff308c326c239429f');
    dispatch(removeTokenFromFavourite({currencytoken:tokenAddress}))
    dispatch(getAlertTokenInfo(tokenAddress));
    
    handleFavRemoveClose();
  };
  const handleFavRemoveDisagree = () => {
    console.log("I do not agree.");
    handleFavRemoveClose();
  };

  return (
    <>
      {(authenticated ? 
        (alertoken.length > 0 && alertoken[1].favorite == true ? 
            <a className="nav-link" href="#" onClick={() => handleFavRemoveOpen()}>
                <button
      className='Favorite isFavourite'>

<i className="icon-heart-empty"></i>
      </button>
                {/* <img className="heart-filled" src={process.env.PUBLIC_URL + "/images/heart.png"} /> */}
            </a> :
            <a className="nav-link" href="#" onClick={() => handleClickOpen()}>
               <button
      className='Favorite'>

<i className="icon-heart-empty"></i>
      </button>
            </a>
        )
        :
        (alertoken.length > 0 && alertoken[1].favorite == true? 
            <a className="nav-link" href="#" onClick={() => handleLoginShow('heart')}> 
             <button className='Favorite isFavourite'>
            <i className="icon-heart-empty"></i></button>
                {/* <img className="heart-filled" src={process.env.PUBLIC_URL + "/images/heart.png"} /> */}
            </a> :
            <a className="nav-link" href="#" onClick={() => handleLoginShow('heart')}> 
                 <button
      className='Favorite'>

<i className="icon-heart-empty"></i>
      </button>
            </a>
        )
    )}
      
      <Dialog
                                                open={open}
                                                onClose={handleConfirmClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                                >
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Add "+(tokeninfo.data.symbol ? tokeninfo.data.symbol : 'BNB ')+ " To Favourites"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                    Are you sure you want to add it in your favourites?
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleDisagree} color="primary">
                                                    No
                                                    </Button>
                                                    <Button onClick={handleAgree} color="primary" autoFocus>
                                                    Yes
                                                    </Button>
                                                </DialogActions>
                                                </Dialog>

                                                <Dialog
                                                open={openRem}
                                                onClose={handleFavRemoveClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                                >
                                                <DialogTitle id="alert-dialog-title">
                                                    {"Remove "+(tokeninfo.data.symbol ? tokeninfo.data.symbol : 'BNB ')+ " from Favourites"}
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                    {"Are you sure you want to remove token address "+(tokeninfo.data.address ? tokeninfo.data.address.substr(0,30)+'...' : bnbToken.substr(0,30)+'...')+" from your favourites?"}
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleFavRemoveDisagree} color="primary">
                                                    No
                                                    </Button>
                                                    <Button onClick={handleFavRemoveAgree} color="primary" autoFocus>
                                                    Yes
                                                    </Button>
                                                </DialogActions>
                                                </Dialog>


<Modal id="add_alert3" className="modal-popup-class" show={showLogin} onHide={handleLoginClose}>
            
            <Modal.Body>
            <i className="las la-times pull-right" onClick={handleLoginClose} />
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
    </>
  );
};

export default AddToFav;
