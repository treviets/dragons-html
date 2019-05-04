import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { auth } from './auth';
import { signUpReducers } from './signUpReducers';
import { homeReducer } from './homeReducer';

const allReducers = combineReducers(
    { 
        auth, 
        signUpReducers, 
        items, 
        itemsHasErrored, 
        itemsIsLoading,
        homeReducer
    });

export default allReducers