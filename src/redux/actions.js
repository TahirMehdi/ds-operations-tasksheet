import fetchData, {handleFetchErrors} from '../helpers/fetchData';

const fetchDataErrorLess = args => fetchData(...args).then(handleFetchErrors);

export const LOGGED_IN = 'LOGIN';
export const LOGGED_OUT = 'LOGOUT';

const loggedIn = payload => ({type: LOGGED_IN, payload});
export const login = (payload) => {
    const {username, password} = payload;
    return dispatch => fetchData('api/login', 'POST', {username, password})
        .then(handleFetchErrors)
        .then(response => {
            const loginInfo = response.json();
            dispatch(loggedIn(loginInfo));
        })
        .catch(err => console.error(err))
};
export const logout = () => ({type: LOGGED_OUT});

const updateJobEntries = payload=> ({type:'JOB_ENTRIES_UPDATE', payload});
export const getJobEntries = userToken=>{
    return dispatch => {
        return fetchData(`api/jobentries/get/${userToken}`, 'GET' )
            .then(handleFetchErrors)
            .then(response => {
                const entries = response.json();
                dispatch(updateJobEntries(entries));
            })
            .catch(err => console.error(err))
    }
};