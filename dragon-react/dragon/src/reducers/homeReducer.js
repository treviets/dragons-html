import {
    GET_HOME_DETAIL_REQUEST,
    GET_HOME_DETAIL_ERROR,
    GET_HOME_DETAIL_SUCCESSFULLY,
    GET_ALL_HOME_SUCCESSFULLY,
    SEARCH_ROOM_SUCCESSFULLY
} from '../actions/homeAction'

export function homeReducer(state = {
    all_homes: [],
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
                rooms: action.rooms,
                message: ""
            })

        case GET_HOME_DETAIL_ERROR:
            return Object.assign({}, state, {
                rooms: null,
                message: action.message
            })
        
        case GET_ALL_HOME_SUCCESSFULLY:
            return Object.assign({}, state, {
                all_homes: action.all_homes,
                message: "",
            })
        
        case SEARCH_ROOM_SUCCESSFULLY:
            return Object.assign({}, state, {
                rooms: action.rooms,
                message: "",
            })
            
        default:
            return state
    }
}
