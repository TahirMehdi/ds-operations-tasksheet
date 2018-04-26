import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import JobsList from './JobsList';

const list = [
    {name: 'test'},
    {name: 'test'},
    {name: 'test'},
];

class App extends Component {
    render() {
        return (<Switch>
                <Route path='/login' component={Login}/>
                <PrivateRoute path='/home' component={() => <div>Hello HOME</div>}/>
                <PrivateRoute path='/list' component={JobsList} componentProps={{list}}/>
                <PrivateRoute path='/' component={() => <div>Hello World</div>}/>
            </Switch>
        );
    }
}

export default App;
