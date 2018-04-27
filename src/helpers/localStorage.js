import {parseJson, stringifyJson} from './convertFnToErrorSafe';

const appName = 'ds-operations-tasksheet';

export const saveUserData = user => localStorage.setItem(appName, stringifyJson(user));
export const loadUserData = () => parseJson(localStorage.getItem(appName));

