import React from 'react';
import PropTypes from 'prop-types';
import './SearchElement.scss';
import Identicon from 'identicon.js';
import tcakeIcon from '../../assets/logom.png';

const SearchElement = ({ element }) => {
  return (
    <div className="SearchElement">
      <img
        src={`https://exchange.pancakeswap.finance/images/coins/${element.contractAddress}.png`}
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

export default SearchElement;
