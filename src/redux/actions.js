import fetchData, {handleFetchErrors} from '../helpers/fetchData';

export const LOGGED_IN = 'LOGIN';
export const LOGGED_OUT = 'LOGOUT';

const loggedIn = (payload) => ({type: LOGGED_IN, payload});

export const login = (payload) => {
    const {username, password} = payload;
    return dispatch => fetchData('auth/login', 'POST', {username, password})
    //TODO currently this code will not work at all, because server redirects after successful login
        .then(handleFetchErrors)
        .then(response => {
            const loginInfo = response.json();
            dispatch(loggedIn(loginInfo));
        })
        .catch(err => console.error(err))
};
export const logout = () => ({type: LOGGED_OUT});