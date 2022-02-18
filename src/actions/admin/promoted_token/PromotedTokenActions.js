import axios from 'axios'
import {
    SERVICE_URL,
    DEFAULT_SERVICE_VERSION,
} from '../../../constants/utility'
import { toast } from 'material-react-toastify'
export const GET_PROMOTEDTOKEN = 'GET_PROMOTEDTOKEN'
export const CREATE_PROMOTEDTOKEN = 'CREATE_PROMOTEDTOKEN'
export const DELETE_PROMOTEDTOKEN = 'DELETE_PROMOTEDTOKEN'
const accessToken = window.localStorage.getItem('accessToken')
const refreshToken = window.localStorage.getItem('refreshToken')
const email = window.localStorage.getItem('email')

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

export const getPromotedToken = () => (dispatch) => {
    axios
        .get(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/promoted-token', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_PROMOTEDTOKEN,
                payload: res.data,
            })
        })
}

export const deletePromotedToken = (id) => (dispatch) => {
    axios
        .delete(
            `${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/promoted-token/' + id,
            {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
            }
        )
        .then((res) => {
            dispatch({
                type: DELETE_PROMOTEDTOKEN,
                payload: res.data,
            })
        })
}

export const createPromotedToken = (promoted) => (dispatch) => {

    axios
        .post(
            `${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/promoted-token/',
            promoted,
            { headers: { Authorization: 'Bearer ' + accessToken } }
        )
        .then((res) => {
          //  console.log(res.response.data.code,'create res');
      
                toast.success(res.data.message)
       
            dispatch({
                type: CREATE_PROMOTEDTOKEN,
                payload: res.data.data,
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
