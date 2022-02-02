import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BannerPlace.scss';
import config from '../../config';
import { useSelector } from 'react-redux';

const BannerPlace = ({ position, ...props }) => {
  const [notFoundBanner, setNotFoundBanner] = useState(false);
  const adverts = useSelector((store) => store.Adverts);

  const properAdvert = adverts.find((advert) => advert.position === position);

  if (!notFoundBanner)
    return (
      <div className="BannerPlaceImage" {...props}>
        <a href={properAdvert?.url} target="_blank" rel="noreferrer">
          <img
            src={config.API_URL + '/adverts/' + position}
            alt={position}
            onError={(e) => {
              e.target.onError = false;
              setNotFoundBanner(true);
            }}
          />
        </a>
      </div>
    );

  return (
    <div className="BannerPlace" {...props}>
      <h2>Place for your banner</h2>
    </div>
  );
};

BannerPlace.propTypes = {};

export default React.memo(BannerPlace);
