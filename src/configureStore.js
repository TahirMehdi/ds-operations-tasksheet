import {applyMiddleware, createStore} from 'redux';
import combinedReducers from './redux/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = preState =>
    createStore(
        combinedReducers,
        preState,
        applyMiddleware(thunk, logger)
    );
export default configureStore;