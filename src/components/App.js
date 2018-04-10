import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


class App extends Component {
  render() {
    return (<Switch>
            <Route path='/login' render={()=><div>this is login component</div>}/>
            <PrivateRoute path='/' render={()=><div>Hello World</div>}/>
        </Switch>
    );
  }
}

export default App;
