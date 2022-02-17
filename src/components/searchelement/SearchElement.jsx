import React, { useEffect, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './SearchElement.scss';
import Identicon from 'identicon.js';
import tcakeIcon from '../../assets/logom.png';
import { useDispatch , useSelector, connect } from 'react-redux'

const SearchElement = ({ element, tokenImg }) => {


  return (
    <div className="SearchElement">
      {/* <img
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
                                /> */}
      {/* <img
        src={(element.symbol == tokenotherinfo.data.symbol ) ? (tokenotherinfo.data.images ? tokenotherinfo.data.images['16x16'] : `https://pancakeswap.finance/images/tokens/${element.contractAddress}.png`) : `https://pancakeswap.finance/images/tokens/${element.contractAddress}.png`}
        onError={(e) => {
          e.target.onError = null;
          if (element.contractAddress.length >= 15) {
            element.symbol === 'Tcake'
              ? (e.target.src = tcakeIcon)
              : (e.target.src = `data:image/png;base64,${new Identicon(
                  element.contractAddress,
                  '200',
                ).toString()}`);
          }
        }}
        alt={element.symbol}
      /> */}
      <img
        src={`https://bsczoneapp.webtracktechnology.com:3001/uploads/tokenImages/${element.symbol.toLowerCase()}.png`}
        onError={(e) => {
          e.target.onError = null;
          if (element.contractAddress.length >= 15) {
            element.symbol === 'Tcake'
              ? (e.target.src = tcakeIcon)
              : (e.target.src = process.env.PUBLIC_URL + '/images/Emoji_Icon_-_Thinking_large.webp');
          }
        }}
        alt={element.symbol}
      />
      {element.symbol}
    </div>
  );
};

SearchElement.propTypes = {
  element: PropTypes.shape({
    value: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

export default connect()(SearchElement);
