import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { auth } from './auth';
import { signUpReducers } from './signUpReducers';
import { homeReducer } from './homeReducer';
import { roomReducer } from './roomReducer';

const allReducers = combineReducers(
    { 
        auth, 
        signUpReducers, 
        items, 
        itemsHasErrored, 
        itemsIsLoading,
        homeReducer,
        roomReducer
    });

export default allReducers;