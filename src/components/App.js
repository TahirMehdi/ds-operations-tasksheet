import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import JobsList from "./JobsList";
import { connect } from "react-redux";
import { logout } from "../redux/actions";

const list = [{ name: "test" }, { name: "test" }, { name: "test" }];

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <div className="Header">Header</div>
          <Component {...matchProps} />
          <div className="Footer">Footer</div>
        </div>
      )}
    />
  );
};

const Header = connect(state => ({ ...state.user }))(state => {
  const { name, surname, authorised, dispatch } = state;
  return authorised ? (
    <div>
      <span>
        Hello, {name} {surname}
      </span>
      <a href="" onClick={() => dispatch(logout())}>
        Log out
      </a>
    </div>
  ) : (
    <div>
      <span>You are not logged in</span>
      <Link to="/login">Log in</Link>
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div>
        {/*<DefaultLayout path="/" component={() => <div>Hello HOME</div>}/>*/}
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          {/*<PrivateRoute path='/home' component={() => <div>Hello HOME</div>}/>*/}
          <PrivateRoute
            path="/"
            component={JobsList}
            componentProps={{ list }}
          />
          {/*<PrivateRoute path='/' component={() => <div>Hello World</div>}/>*/}
        </Switch>
      </div>
    );
  }
}

export default App;
