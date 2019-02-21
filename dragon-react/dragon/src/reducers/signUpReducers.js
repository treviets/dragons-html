import { SIGNUP_SUCCESS } from '../constants/ActionTypes';

export function signUpReducers(state = {
    //gia tri khoi tao
    cusId: localStorage.getItem('cusId'),
    isFetching: true
}, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                cusId: action.cusId,
                isFetching: action.isFetching
            })
        default:
            return state
    }
}
