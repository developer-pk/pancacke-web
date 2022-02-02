import React, { useEffect, useContext, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import './Promoted.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import {getPromotedToken} from '../../actions/admin/promoted_token/PromotedTokenActions'
import { useSelector } from 'react-redux'
import { SERVICE_URL, DEFAULT_SERVICE_VERSION } from "../../constants/utility"

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


const Promoted = ({ dispatch }) => {
  /**Promoted Tokens functionality */
  const { promotedtokens } = useSelector(state=>state);
  useEffect(() => {
    dispatch(getPromotedToken());
    
}, [])
  /**end */

  return (
    <ul>
    {
    promotedtokens.length > 0 ? 
    promotedtokens.map((promoted, index) =>
        <li>
            <span className="pro_check">
                {' '}
               { promoted.image ? <img src={SERVICE_URL+"/uploads/tokens/"+promoted.image} className="trend-img" onError={(e) => {
                e.target.onError = null;
                if (promoted.contractAddress >= 15) {
                     (e.target.src = process.env.PUBLIC_URL + '/images/Emoji_Icon_-_Thinking_large.webp');
                }
                }} /> : ''}
            </span>{' '}
            <span className="pro_title">
                                    {
                                        promoted
                                            .apiData[0]
                                            .smartContract
                                            .currency
                                            .name
                                    }
                                </span>{' '}
                                {/* <span className="pro_title" onClick={() => handleSymbolInfo(promoted.contractAddress,promoted.apiData[0].smartContract.currency.name)}> */}
                                |{' '}
                                <span className="pro_price">
                                {
                                        promoted
                                            .apiData[0]
                                            .smartContract
                                            .currency
                                            .symbol
                                    }
                                </span>
            {/* |{' '} */}
            {/* <span className="pro_price">
                Price
            </span> */}
        </li>
    ) : <h5>No Records Found.</h5>}
    </ul>

  );
};

export default connect()(Promoted);
