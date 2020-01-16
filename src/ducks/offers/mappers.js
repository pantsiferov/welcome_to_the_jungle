import { dateToShow } from 'helpers/moment';
import get from 'lodash.get';

function mapAttributes(nameAttr, item) {
  const valueAttr = get(item, nameAttr);
  return {
    id: valueAttr.id,
    name: valueAttr.name,
    type: nameAttr,
  };
}


export function mapOffersToState(data) {
  const contractTypes = new Set();
  const publishedTimes = new Set();
  const attributes = {};
  const offers = {};
  const { jobs } = data;
  // TODO think about it how to make one pass cleaner
  // eslint-disable-next-line no-restricted-syntax
  for (const item of jobs) {
    const publishedAt = dateToShow(item.published_at);
    offers[item.id] = {
      ...item,
      published_at: publishedAt,
    };
    contractTypes.add(item.contract_type.en);
    publishedTimes.add(publishedAt);
    attributes[get(item, 'department.id')] = mapAttributes('department', item);
    attributes[get(item, 'office.id')] = mapAttributes('office', item);
  }
  return {
    attributesGroup: attributes,
    contractTypes: Array.from(contractTypes),
    publishedTimes: Array.from(publishedTimes),
    offers,
  };
}
