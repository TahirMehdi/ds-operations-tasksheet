import {parseJson, stringifyJson} from './convertFnToErrorSafe';

export const saveUserData = user => localStorage.setItem('user', stringifyJson(user));
export const loadUserData = () => parseJson(localStorage.getItem('user'));

