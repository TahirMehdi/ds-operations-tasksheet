import React from 'react';
import Job from './Job';

const JobsList = (props) => {
    const {list} = props;
    console.warn(props)
    return (<div>
        {list.map((el, index) =>
            <Job name={el.name} key={index}/>)
        }
    </div>)
};
export default JobsList;