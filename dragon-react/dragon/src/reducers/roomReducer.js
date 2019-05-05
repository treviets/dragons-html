import {
    GET_ROOM_DETAIL_REQUEST,
    GET_ROOM_DETAIL_ERROR,
    GET_ROOM_DETAIL_SUCCESSFULLY
} from '../actions/roomAction';

export function roomReducer(state = {
    room_detail: null,
    message: null
}, action) {
    switch (action.type) {
        case GET_ROOM_DETAIL_REQUEST:
            return Object.assign({}, state, {
                room_detail: null,
                message: null
            })

        case GET_ROOM_DETAIL_SUCCESSFULLY:
            return Object.assign({}, state, {
                room_detail: action.room_detail,
                message: ""
            })

        case GET_ROOM_DETAIL_ERROR:
            return Object.assign({}, state, {
                room_detail: null,
                message: action.message
            })

        default:
            return state
    }
}
