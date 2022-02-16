import axios from 'axios'
import {
    SERVICE_URL,
    DEFAULT_SERVICE_VERSION,
} from '../../../constants/utility'
import { toast } from 'material-react-toastify'
export const GET_TOKEN = 'GET_TOKEN'
export const CREATE_TOKEN = 'CREATE_TOKEN'
export const DELETE_TOKEN = 'DELETE_TOKEN'
const accessToken = window.localStorage.getItem('accessToken')

export const getToken = () => (dispatch) => {
    axios
        .get(`${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/token-image', {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        .then((res) => {
            dispatch({
                type: GET_TOKEN,
                payload: res.data,
            })
        })
}

export const deleteToken = (id) => (dispatch) => {
    axios
        .delete(
            `${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/token/' + id,
            {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
            }
        )
        .then((res) => {
            dispatch({
                type: DELETE_TOKEN,
                payload: res.data,
            })
        })
}

export const createToken = (token) => (dispatch) => {

    axios
        .post(
            `${SERVICE_URL}/${DEFAULT_SERVICE_VERSION}` + '/token-image/',
            token,
            { headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type':
            'multipart/form-data; boundary=<calculated when request is sent>', } }
        )
        .then((res) => {
            console.log(res.data,'create res');
            if (res.status == 200) {
                toast.success(res.data.message)
            }
            dispatch({
                type: CREATE_TOKEN,
                payload: res.data.data,
            })
        })
}
