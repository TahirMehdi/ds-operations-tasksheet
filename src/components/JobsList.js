import React from 'react';
import Job from './Job';
import {connect} from 'react-redux';
import {getJobEntries} from '../redux/actions';

const JobsList = (props) => {
    const {list, dispatch} = props;
    if (!list)
        dispatch(getJobEntries());
    return (<div>
        {list.map((el, index) =>
            <Job name={el.name} key={index}/>)
        }
    </div>)
};

export default connect(state =>({
    asd: state
}))(JobsList);