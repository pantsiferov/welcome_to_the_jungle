import get from 'lodash.get';
import includes from 'lodash.includes';
import { createSelector } from 'reselect';

import { parseQueryString } from 'helpers/queryStringHelper';
import { dateStringToTimeStamp } from 'helpers/moment';
import { selectQueryString } from 'ducks/router/selectors';


export const selectContractTypeReference = createSelector(
  (state) => get(state, 'offers.contractTypes'),
  (contractTypes = []) => contractTypes.map((item) => ({
    value: item,
    label: item,
  })),
);

export const selectPublishedTimes = createSelector(
  (state) => get(state, 'offers.publishedTimes'),
  (publishedTimes = []) => publishedTimes.map((item) => ({
    value: item,
    label: item,
  })).sort(),
);

const selectAttributesByGroup = (state) => get(state, 'offers.attributesGroup');

export const selectAttributesByGroupToSelect = createSelector(
  selectAttributesByGroup,
  (attributesGroups = {}) => Object.values(attributesGroups).map((item) => ({
    value: item.id,
    label: `${item.type} - ${item.name}`,
    type: item.type,
  })),
);

export function includesSubstring(string, substring) {
  return includes(string.toLowerCase(), substring.toLowerCase());
}

const filtersRules = {
  search: (string, item) => includesSubstring(get(item, 'name'), string),
  contractTypes: (string, item) => includesSubstring(get(item, 'contract_type.en'), string),
  date: (dateString, item) => dateStringToTimeStamp(get(item, 'published_at')) >= dateStringToTimeStamp(dateString),
  groupBy: (attr = {}, item) => get(item, `${attr.type}.id`) === Number(attr.id),
};

const searchFilter = (filteredState = {}, item) => Object.keys(filteredState)
  .every((filterKey) => {
    if (typeof filtersRules[filterKey] !== 'function') {
      return true;
    }
    return filtersRules[filterKey](filteredState[filterKey], item);
  });


export const selectOffersWithFilters = createSelector(
  (state) => get(state, 'offers.offers'),
  (state) => selectQueryString(state),
  (state) => get(state, 'offers.publishedTimes'),
  (offers = {}, filterString) => {
    const filtersState = parseQueryString(filterString);
    return Object.values(offers).filter((item) => searchFilter(filtersState, item));
  },
);


export const selectOfferById = (state, id) => {
  const offers = get(state, 'offers.offers', {});
  return offers[id];
};
