import {combineReducers} from 'redux';
import {LOGGED_IN, LOGGED_OUT} from './actions';
import {saveUserData} from '../helpers/localStorage';

function user(state = {
    authorised: false
}, action) {
    switch (action.type) {
        case LOGGED_IN:
            saveUserData(action.payload);
            return {...state, ...action.payload, authorised: true};
        case LOGGED_OUT:
            saveUserData(null);
            return {...state, authorised: false};
        default:
            return state;
    }
}

const combinedReducers = combineReducers({user});
export default combinedReducers;