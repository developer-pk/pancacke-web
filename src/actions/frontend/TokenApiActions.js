import axios from 'axios'
import {
    TOKEN_API_URL,
    TOKEN_STAT_API_URL,
    DEFAULT_SERVICE_VERSION,
    CRYPTO_API_KEY,
    SERVICE_URL,
} from '../../constants/utility'
import { toast } from 'material-react-toastify'
import history from '../../history.js'

export const GET_TOKEN_SYMBOL = 'GET_TOKEN_SYMBOL'
export const GET_TOKEN_INFO = 'GET_TOKEN_INFO'
export const GET_TOKEN_TRANSFER_LIST = 'GET_TOKEN_TRANSFER_LIST'
export const GET_TOKEN_OTHER_INFO = 'GET_TOKEN_OTHER_INFO'
export const GET_ALERT_TOKEN_INFO = 'GET_ALERT_TOKEN_INFO'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const REMOVE_ALERT = 'REMOVE_ALERT'
export const GET_FAVOURITE_LIST = 'GET_FAVOURITE_LIST'
export const GET_TRENDS = 'GET_TRENDS'
export const GET_TCAKE = 'GET_TCAKE'
export const GET_INBOUND = 'GET_INBOUND'
const accessToken = window.localStorage.getItem('accessToken')
const refreshToken = window.localStorage.getItem('refreshToken')
const email = window.localStorage.getItem('email')
const endpoint = "https://graphql.bitquery.io/";

export const generateRefreshToken = () => {
    axios
        .post(
            `${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/auth/refresh-token',
            { email: email, refreshToken: refreshToken }
        )
        .then((res) => {
            console.log(res, 'get token response ')
            localStorage.setItem('accessToken', res.data.accessToken)
            localStorage.setItem('refreshToken', res.data.refreshToken)
        })
        .catch((error) => {})
}

export const getTokenBySymbol = (symbol) => (dispatch) => {
    // axios
    //     .get(`${TOKEN_API_URL}` + '/token/token_search?search='+ searchSymbol +'&key=ACCwyjHCjjGNk&format=structure', {
    //     })
    //     .then((res) => {
    //         dispatch({
    //             type: GET_TOKEN_SYMBOL,
    //             payload: res.data,
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error,'sdfdf');
    //     })
  dispatch({
                    type: GET_TOKEN_SYMBOL,
                    payload: symbol ? symbol :[],
                })

}

export const getTokenInfo = (address) => (dispatch) => {
    axios
        .get(`${TOKEN_API_URL}` + '/token/token_stat?token='+ address +'&key=ACCwyjHCjjGNk&format=structure', {
        })
        .then((res) => {
            //console.log(res.data[0],'get token info');
            dispatch({
                type: GET_TOKEN_INFO,
                payload: res.data[0] ? res.data[0]:{},
            })
        })
        .catch((error) => {
            console.log(error,'sdfdf');
                //toast.error(error.response.data.errors[0].messages[0])
        })
}

export const getTokenTransferList = (token) => (dispatch) => {
    axios
        .get(`${TOKEN_API_URL}` + '/token/transfers?token='+ token +'&limit=100&key=ACCwyjHCjjGNk&format=structure', {
        })
        .then((res) => {
            //console.log(res.data,'transfers');
            dispatch({
                type: GET_TOKEN_TRANSFER_LIST,
                payload: res.data,
            })
        })
        .catch((error) => {
            console.log(error,'sdfdf');
                //toast.error(error.response.data.errors[0].messages[0])
        })
}

export const getTokenOtherInfo = (symbol) => (dispatch) => {
    axios
        .get(`${TOKEN_STAT_API_URL}/${DEFAULT_SERVICE_VERSION}` + '/currencies?api_key='+ `${CRYPTO_API_KEY}` +'&symbols='+ symbol +'&optionalFields=images,links', {
        })
        .then((res) => {
            //console.log(res,'anj123');
            dispatch({
                type: GET_TOKEN_OTHER_INFO,
                payload: res.data.data[0] ? res.data.data[0]:{},
            })
        })
        .catch((error) => {
            console.log(error,'sdfdf');
                //toast.error(error.response.data.errors[0].messages[0])
        })
}

export const getAlertTokenInfo = (token) => (dispatch) => {
    axios
        .get(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/alert/get-saved-alert/'+ token, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {
           // history.push('/token')
            dispatch({
                type: GET_ALERT_TOKEN_INFO,
                payload: res.data,
            })
        })
        .catch((error) => {
            if(error){
                if (
                    error.response.data.code == 401 &&
                    (error.response.data.message == 'jwt expired' ||
                        error.response.data.message == 'jwt malformed')
                ) {
                    generateRefreshToken()
                } else if (error.response.status == 400 || error.response.status == 403) {
                    toast.error(error.response.data.message)
                }else {
                    console.log(error.response,'error');
                    toast.error(error.response.data.errors[0].messages[0])
                }
            }
        })
}

export const addTokenInFavourite = (tokenInfo) => (dispatch) => {
    axios
        .post(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/alert/add-favorite', tokenInfo, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {
            if (res.status == 201 || res.status == 200) {
                toast.success(res.data.message)
                history.push('/token');
            }
            dispatch({
                type: ADD_FAVOURITE,
                payload: res.data,
            })
        })
        .catch((error) => {console.log(error.response,'fav');
            if(error){
                if (
                    error.response.data.code == 401 &&
                    (error.response.data.message == 'jwt expired' ||
                        error.response.data.message == 'jwt malformed')
                ) {
                    generateRefreshToken()
                } else if (error.response.status == 400) {
                    toast.error(error.response.data.message)
                }else if (error.response.status == 403) {
                    toast.error(error.response.data.message)
                } else {
                    toast.error(error.response.data.errors[0].messages[0])
                }
            }
        })
}

export const removeTokenFromFavourite = (tokenInfo) => (dispatch) => {
    axios
        .post(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/alert/un-favorite', tokenInfo, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {
            if (res.status == 201 || res.status == 200) {
                toast.success(res.data.message)
                //history.push('/token');
            }
            dispatch({
                type: REMOVE_FAVOURITE,
                payload: res.data,
            })
        })
        .catch((error) => {
            if(error){
                if (
                    error.response.data.code == 401 &&
                    (error.response.data.message == 'jwt expired' ||
                        error.response.data.message == 'jwt malformed')
                ) {
                    generateRefreshToken()
                } else if (error.response.status == 400) {
                    toast.error(error.response.data.message)
                }else if (error.response.status == 403) {
                    toast.error(error.response.data.message)
                }  else {
                    toast.error(error.response.data.errors[0].messages[0])
                }
            }
        })
}

export const removeAlert = (tokenInfo) => (dispatch) => {
    axios
        .post(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/alert/remove-alert', tokenInfo, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {
            if (res.status == 201 || res.status == 200) {
                toast.success(res.data.message)
                //history.push('/token');
            }
            dispatch({
                type: REMOVE_ALERT,
                payload: res.data,
            })
        })
        .catch((error) => {
            console.log(error,'sdfdf');
                //toast.error(error.response.data.errors[0].messages[0])
        })
}

export const getFavouriteList = () => (dispatch) => {
    axios
        .get(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/alert/my-favorite-tokens', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {

            if (res.status == 201 || res.status == 200) {
               // toast.success(res.data.message)
              //  history.push('/token');
            }

            dispatch({
                type: GET_FAVOURITE_LIST,
                payload: res.data ? res.data: [],
            })
        })
        .catch((error) => {
            console.log(error,'sdfdf');
                //toast.error(error.response.data.errors[0].messages[0])
        })
}

export const getTrends = (trends) => (dispatch) => {

  dispatch({
            type: GET_TRENDS,
            payload: trends ? trends :[],
        })

}

export const getTcakeData = () => (dispatch) => {
    axios
        .get('https://api.pancakeswap.info/api/v2/tokens/0x3b831d36ed418e893f42d46ff308c326c239429f', {
        })
        .then((res) => {
            //console.log(res.data.data,'tcake');
            dispatch({
                type: GET_TCAKE,
                payload: res.data.data ? res.data.data :{},
            })
        })
        .catch((error) => {
            console.log(error,'sdfdf');
        })
}

export const getInboundTransferList = (token) => (dispatch) => {

  dispatch({
                    type: GET_INBOUND,
                    payload: token ? token :[],
                })

}

export const getTokenCakeData = (token) => (dispatch) => {

    axios
    .get('https://api.pancakeswap.info/api/v2/tokens/'+token, {
    })
    .then((res) => {
        //console.log(res.data.data,'tcake');
        dispatch({
            type: GET_TCAKE,
            payload: res.data.data ? res.data.data :{},
        })
    })
    .catch((error) => {
        console.log(error,'sdfdf');
    })
  
  }