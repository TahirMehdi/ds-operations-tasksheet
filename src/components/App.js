import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';


class App extends Component {
  render() {
    return (<Switch>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/' render={()=><div>Hello World</div>}/>
        </Switch>
    );
  }
}

export default App;
