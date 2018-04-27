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

const fakeResponse = (response) => {
    return new Promise(resolve => {
        setTimeout(() => resolve({ok: true, json: () => response}), 500)
    });
};

const fakeUser = {
    name: 'Daniel',
    surname: 'Suleyman',
    rowAccess: {
        canAdd: true,
        // canEditOwn: true,
        // canEditAny: false
    },
    token: '#@$DSA#%KlYSD'
};

const fakeJobEntries = {
    rows: [
        {
            id: 'randomid1',
            editable: false,
            data: {columnName1: 'cellData1', columnName2: 'cellData2', columnName3: 'cellData3', IPWP: true}
        }, {
            id: 'randomid2',
            editable: true,
            data: {columnName1: 'cellData1', columnName2: 'cellData2', columnName3: 'cellData3', IPWP: false}
        },
    ],
    columnHeaders: {
        columnName1: {type: 'dropdown', values: ['p1', 'p1', 'p1']},
        columnName2: {type: 'text'},
        columnName3: {type: 'date'},
        IPWP: {type: 'loadablelink'}
    }
};

const fakeFetch = (url, params) => {
    switch (url) {
        case 'api/login':
            return fakeResponse({...fakeUser});
        case 'api/jobentries/get':
            return fakeResponse({...fakeJobEntries});
        default:
            return fakeResponse({});
    }
};

const fetchData = (url, method, params) => {
    const convertedParams = createFetchRequest(params, method);
    return fakeFetch(url, convertedParams);
};
export default fetchData;