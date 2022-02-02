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
  const [showLogin, setLoginShow] = useState(false);
  const { favourite } = useSelector(state=>state);
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
    </ul>


  );
};

export default connect()(Favourite);
