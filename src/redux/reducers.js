import {combineReducers} from 'redux';
import {LOGGED_IN, LOGGED_OUT} from './actions';

function user(state = {
    authorised: false
}, action) {
    switch (action.type) {
        case LOGGED_IN:
            console.warn({...state, ...action.payload})
            return {...state, ...action.payload};
        case LOGGED_OUT:
            return {...state, authorised: false};
        default:
            return state;
    }
}

const combinedReducers = combineReducers({user});
export default combinedReducers;