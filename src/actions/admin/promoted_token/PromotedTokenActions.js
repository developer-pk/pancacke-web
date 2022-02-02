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
            { headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type':
            'multipart/form-data; boundary=<calculated when request is sent>', } }
        )
        .then((res) => {
            console.log(res.data,'create res');
            if (res.status == 200) {
                toast.success(res.data.message)
            }
            dispatch({
                type: CREATE_PROMOTEDTOKEN,
                payload: res.data.data,
            })
        })
}
