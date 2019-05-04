import { combineReducers } from 'redux'
import { items, itemsHasErrored, itemsIsLoading } from './items'
import { auth } from './auth'
import { signUpReducers } from './signUpReducers'


const allReducers = combineReducers(
    { 
        auth, 
        signUpReducers, 
        items, 
        itemsHasErrored, 
        itemsIsLoading 
    });

export default allReducers