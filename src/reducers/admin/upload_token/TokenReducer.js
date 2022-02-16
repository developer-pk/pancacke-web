import {
    GET_TOKEN,
    CREATE_TOKEN,
    DELETE_TOKEN,
} from '../../../actions/admin/upload_token/TokenActions'

const initialState = []

const TokenReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN: {
            return [...action.payload]
        }
        case CREATE_TOKEN: {
            return [...state,action.payload]
        }
        case DELETE_TOKEN: {
            return [...state,action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default TokenReducer
