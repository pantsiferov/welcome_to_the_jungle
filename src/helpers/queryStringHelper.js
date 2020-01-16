import qs from 'qs';


export const stringifyObjectToQueryString = (object) => qs.stringify(object, { encode: false });

export const parseQueryString = (queryString) => qs.parse(queryString, { ignoreQueryPrefix: true });
