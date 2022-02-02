import React, { useEffect, useContext, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import './Ads.css';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';
import {getAds, deleteAds} from '../../actions/admin/ads/AdsActions'
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


const Ads = ({ dispatch }) => {
  /**Ads functionality */
    const [ip, setIP] = useState('');
    const { ads } = useSelector(state=>state);
    //creating function to load ip address from the API
    const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    // console.log(res.data);
    setIP(res.data.IPv4)
    }

  useEffect(() => {
    getData()
    const params={type:'GET_ADS'};
    dispatch(getAds(params));
}, [])
  /**end */

  return (
    <div className="sidebar_div">
                                <div className="sise_title">
                                    <b className="ads">ADS</b> APP ADS -{' '}
                                    <span>
                                        <a href="https://tcake.io/contact/" target="_blank">Contact us!</a>
                                    </span>
                                </div>
                                <div
                                    id="carouselExampleSlidesOnly"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                    {ads.map((add, index) => (
                                        <div className={"carousel-item " + (index == 0 ? 'active' : '')} key={index}> 
                                            <div className="slide_box">
                                                <a href={add.title} target="_blank"><img src={SERVICE_URL+"/uploads/"+add.ads} /></a>
                                            </div>
                                        </div>
                                 
                                    ))}
                                        <a
                                            className="carousel-control-prev"
                                            href="#carouselExampleSlidesOnly"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <img
                                                alt="img-text"
                                                src={process.env.PUBLIC_URL + "/images/left.png"}
                                            />
                                        </a>
                                        <a
                                            className="carousel-control-next"
                                            href="#carouselExampleSlidesOnly"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <img
                                                alt="img-text"
                                                src={process.env.PUBLIC_URL + "/images/right.png"}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
  );
};

export default connect()(Ads);
