import config from '../config';
import { AdvertsConstants } from '../constants';

const fetchAdverts = () => async (dispatch) => {
  try {
    const response = await fetch(config.API_URL + '/adverts');
    const responseBody = await response.json();

    dispatch({
      type: AdvertsConstants.GET_ADVERTS,
      payload: responseBody.data.adverts,
    });
  } catch (e) {
    console.error(e);
  }
};

export const AdvertsActions = {
  fetchAdverts,
};
