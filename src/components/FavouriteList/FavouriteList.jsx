import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '../../config';

import './FavouriteList.scss';

const FavouriteList = () => {
  const [favouriteTokens, setFavouriteTokens] = useState([]);

  const { favourites } = useSelector((store) => store.Profile);

  useEffect(() => {
    const filter = {
      where: {
        id: { inq: favourites },
      },
    };

    fetch(`${config.API_URL}/tokens/search?filter=${JSON.stringify(filter)}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data.length > 0) {
          setFavouriteTokens(res.data);
        }
      });
  }, [favourites.length]);

  return (
    <div className="favourite-pairs">
      <p className="favourite-pairs__heading">Favourite:</p>
      {favourites.length > 0 ? (
        <ul className="favourite-pairs__list">
          {favouriteTokens.map((token) => (
            <li className="favourite-pairs__list-item button">
              <Link to={`/pair-explorer/${token.symbol}/v2`} className="button">
                {token.symbol}/BNB
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="favourite-pairs__no-pairs">You don't have favourite pairs</p>
      )}
    </div>
  );
};

export default FavouriteList;
