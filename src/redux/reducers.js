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

function jobEntries(state = [], action){
    switch(action.type){
        case 'JOB_ENTRIES_UPDATE':
            return [...action.payload];
        case 'JOB_ENTRIES_DELETE':
            return [...action.payload];
        case 'JOB_ENTRIES_ADD':
            return [...action.payload];
        case 'JOB_ENTRIES_REMOVE':
            return [...action.payload];
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    user,
    jobEntries
});
export default combinedReducers;