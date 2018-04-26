import {parseJson, stringifyJson} from './convertFnToErrorSafe';

export const createFetchRequest = (options, method) => {
    let parsedOptions = stringifyJson(options);
    return {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: parsedOptions
    };
};

export const handleFetchErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

const fakeResponse = (response)=>{
    return new Promise(resolve =>{
        setTimeout(()=>resolve({ ok:true, json:()=>response}), 500)
    });
};
const fakeFetch = (url, params)=>{
    switch(url){
        case 'auth/login':
            return fakeResponse({...parseJson(params.body)});
        default:
            return fakeResponse({});
    }
};

const fetchData = (url, method, params ) => {
    const convertedParams = createFetchRequest(params, method);
    return fakeFetch(url, convertedParams);
};
export default fetchData;