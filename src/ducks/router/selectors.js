import get from 'lodash.get';
import { parseQueryString } from 'helpers/queryStringHelper';

export const selectQueryString = (state) => get(state, 'router.location.search', '');

export function selectQueryParamsObject(state) {
  const queryString = selectQueryString(state);
  return parseQueryString(queryString);
}
