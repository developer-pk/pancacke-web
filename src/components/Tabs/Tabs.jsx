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


const Tabs = ({ dispatch }) => {
  /**Ads functionality */

  /**end */

  return (
    <div className="promo_tab">
    <ul className="nav nav-tabs">
        <li>
            <a
                
                data-toggle="tab"
                href="#promoted1"
            >
                promoted
            </a>
        </li>
        <li>
            <a
                className="active"
                data-toggle="tab"
                href="#trending1"
            >
                Trending
            </a>
        </li>
        <li>
            <a
                data-toggle="tab"
                href="#listing1"
            >
                New Listings 2
            </a>
        </li>
        <li>
            <a data-toggle="tab" href="#fav1">
                Favourite
            </a>
        </li>
    </ul>
    <div className="tab-content">
        <div
            id="promoted1"
            className="tab-pane fade"
        >
            <Promoted />
        </div>
        <div
            id="trending1"
            className="tab-pane fade in active show"
        >
            <Trending />
        </div>
        <div
            id="listing1"
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
        <div id="fav1" className="tab-pane fade">

            <Favourite />
        </div>
    </div>
</div>
  );
};

export default connect()(Tabs);
