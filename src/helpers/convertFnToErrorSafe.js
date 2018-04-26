const convertFnToErrorSafe = (fn, alias)=>{
    return (...args)=>{
        let response = null;
        try{
           response = fn(...args);
        }catch(error){
            console.group(`Cannot ${alias}`);
            console.error('Arguments: ', ...args);
            console.error(error);
            console.groupEnd();
        }
        return response;
    }
};
export default convertFnToErrorSafe;
export const parseJson = convertFnToErrorSafe(JSON.parse, 'JSON.parse');
export const stringifyJson = convertFnToErrorSafe(JSON.stringify, 'JSON.stringify');
