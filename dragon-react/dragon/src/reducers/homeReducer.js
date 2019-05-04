import {
    GET_HOME_DETAIL_REQUEST,
    GET_HOME_DETAIL_ERROR,
    GET_HOME_DETAIL_SUCCESSFULLY
} from '../actions/homeAction'

export function homeReducer(state = {
    rooms: [],
    message: null
}, action) {
    switch (action.type) {
        case GET_HOME_DETAIL_REQUEST:
            return Object.assign({}, state, {
                rooms: null,
                message: null
            })

        case GET_HOME_DETAIL_SUCCESSFULLY:
            return Object.assign({}, state, {
                rooms: state.rooms,
                message: ""
            })

        case GET_HOME_DETAIL_ERROR:
            return Object.assign({}, state, {
                rooms: null,
                message: state.message
            })

        default:
            return state
    }
}
