import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const PrivateRoute = ({component: Component, authorised, ...rest}) =>
    <Route {...rest} render={(props) =>
        (authorised
                ? (<Component {...props} />)
                : (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>))
    }/>;

function mapStateToProps(state) {
    return {...state};
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))