import {
    GET_PROMOTEDTOKEN,
    CREATE_PROMOTEDTOKEN,
    DELETE_PROMOTEDTOKEN,
} from '../../../actions/admin/promoted_token/PromotedTokenActions'

const initialState = []

const PromotedTokenReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PROMOTEDTOKEN: {
            return [...action.payload]
        }
        case CREATE_PROMOTEDTOKEN: {
            return [...state,action.payload]
        }
        case DELETE_PROMOTEDTOKEN: {
            return [...state,action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default PromotedTokenReducer
