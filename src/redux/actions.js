export const LOGGED_IN = 'LOGIN';
export const LOGGED_OUT = 'LOGOUT';

export const LOGIN = (payload) => ({type: LOGGED_IN, payload});
export const LOGOUT = () => ({type: LOGGED_OUT});
