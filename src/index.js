import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import combinedReducers from './redux/reducers';

const store = createStore(combinedReducers);
const Root = () => {
    return (<Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>)
};

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
