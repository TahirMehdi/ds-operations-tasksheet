import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const PrivateRoute = ({component: Component, componentProps, authorised, ...rest}) => {
    return <Route {...rest} render={(props) =>
        (authorised
            ? (<Component {...componentProps} />)
            : (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>))
    }/>;
}


function mapStateToProps(state) {
    const {authorised} = state.user;
    return {authorised};
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))