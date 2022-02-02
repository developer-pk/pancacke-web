import {
    GET_INBOUND,
} from '../../actions/frontend/TokenApiActions'

const initialState = {data:{}}

const InboundTokenReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_INBOUND: {
//console.log(action.payload,'anj');
            return {...state, data: action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default InboundTokenReducer
