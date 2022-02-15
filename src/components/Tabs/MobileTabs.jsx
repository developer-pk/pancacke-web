import React, { useEffect, useContext, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import './Tabs.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Trending  from '../TrendingTab/Trending';
import Promoted  from '../PromotedTab/Promoted';
import Favourite  from '../FavouriteTab/Favourite';

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


const MobileTabs = ({ dispatch }) => {
  /**Ads functionality */

  /**end */

  return (
    <div className="promo_tab">
    <ul className="nav nav-tabs">
        <li>
            <a
                
                data-toggle="tab"
                href="#promoted"
            >
                promoted
            </a>
        </li>
        <li>
            <a
                className="active"
                data-toggle="tab"
                href="#trending"
            >
                Trending
            </a>
        </li>
        <li>
            <a
                data-toggle="tab"
                href="#listing"
            >
                New Listings
            </a>
        </li>
        <li>
            <a data-toggle="tab" href="#fav">
                Favourite
            </a>
        </li>
    </ul>
    <div className="tab-content">
        <div
            id="promoted"
            className="tab-pane fade"
        >
            <Promoted />
        </div>
        <div
            id="trending"
            className="tab-pane fade in active show"
        >
            <Trending />
        </div>
        <div
            id="listing"
            className="tab-pane fade"
        >
            <li>
                <span className="pro_check">
                    {' '}
                    <img
                        alt="img-text"
                        src={process.env.PUBLIC_URL + "/images/check.png"}
                    />
                </span>{' '}
                <span className="pro_title">
                    Token Name
                </span>{' '}
                |{' '}
                <span className="pro_price">
                    Price
                </span>
            </li>
            <li>
                <span className="pro_check">
                    {' '}
                    <img
                        alt="img-text"
                        src={process.env.PUBLIC_URL + "/images/check.png"}
                    />
                </span>{' '}
                <span className="pro_title">
                    Token Name
                </span>{' '}
                |{' '}
                <span className="pro_price">
                    Price
                </span>
            </li>
            <li>
                <span className="pro_check">
                    {' '}
                    <img
                        alt="img-text"
                        src={process.env.PUBLIC_URL + "/images/check.png"}
                    />
                </span>{' '}
                <span className="pro_title">
                    Token Name
                </span>{' '}
                |{' '}
                <span className="pro_price">
                    Price
                </span>
            </li>
        </div>
        <div id="fav" className="tab-pane fade">

            <Favourite />
        </div>
    </div>
</div>
  );
};

export default connect()(MobileTabs);
