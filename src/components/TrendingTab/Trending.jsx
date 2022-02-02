import React, { useEffect, useContext, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import './Trending.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import {getTrends} from '../../actions/frontend/TokenApiActions'
import { useSelector } from 'react-redux'
import { SERVICE_URL, DEFAULT_SERVICE_VERSION } from "../../constants/utility"
import { useQuery } from "react-query";
import NumberFormat from 'react-number-format';
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


const Trending = ({ dispatch }) => {
  /**Trending functionality */
  const endpoint = "https://graphql.bitquery.io/";
  const { trends } = useSelector(state=>state);
  const trendingFunction = () =>{
    //if(value){
        return fetch(endpoint, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "X-API-KEY": "BQYAOLGxCUZFuXBEylRKEPm2tYHdi2Wu",
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ query: `{
                ethereum(network:ethereum) {
                  dexTrades(
                    options: {desc: "tradeAmount", limit: 10, limitBy: {each: "baseCurrency.address", limit: 1}}
                    date: {after: "2021-11-01"}
                  ) {
                    tradeAmount(calculate: sum, in: USDT)
                    baseCurrency {
                      address
                      name
                      symbol
                    }
                  }
                }
              }`,
                mode: 'cors',

            }) // ({ QUERY })
          })
            .then((response) => {
                
              if (response.status >= 400) {
                throw new Error("Error fetching data");
              } else {
                
                return response.json();
              }
            })
            .then((data) => {
                console.log(data.data.ethereum.dexTrades,'print trending');

                  dispatch(getTrends(data.data.ethereum.dexTrades));
                //  setSearchArr(symbols1)
            });
    //}

    };
    const { data1, isLoading1, error1,trendFetch  } = useQuery(['trend'], () => trendingFunction());
  /**end */

  return (
      <ul>
    {
        trends.data.length > 0 ? 
        trends.data.map((trend, index) =>
            <li>
            <span className="pro_check">
                {' '}
                {
                    trend.baseCurrency.address ? 
                    <img
                    src={`https://pancakeswap.finance/images/tokens/${trend.baseCurrency.address}.png`}
                    onError={(e) => {
                    e.target.onError = null;
                    if (trend.baseCurrency.address.length >= 15) {
                        trend.baseCurrency.symbol === 'Tcake'
                        ? (e.target.src = process.env.PUBLIC_URL + '/images/logo-new.png')
                        : (e.target.src = process.env.PUBLIC_URL + '/images/Emoji_Icon_-_Thinking_large.webp');
                    }
                    }}
                    alt={trend.baseCurrency.symbol} className="trend-img"
            />
                    :
                    <img
                    alt="img-text"
                    src={process.env.PUBLIC_URL + "/images/check.png"}
                />
                }
                
                
            </span>{' '}
            <span className="pro_title" title={trend.baseCurrency.name}>
                {trend.baseCurrency.name}
            </span>{' '}
            |{' '}
            <span className="pro_price">
            <NumberFormat value={trend.tradeAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />

            </span>
        </li>
        ) : <h5>No Records Found.</h5>}
        </ul>

  );
};

export default connect()(Trending);
