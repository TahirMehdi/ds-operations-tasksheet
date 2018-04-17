import {createStore} from 'redux';
import combinedReducers from './redux/reducers';

const configureStore = ()=>createStore(combinedReducers);
export default configureStore;