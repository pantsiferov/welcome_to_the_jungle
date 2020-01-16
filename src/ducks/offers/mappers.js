import { dateToShow } from 'helpers/moment';
import get from 'lodash.get';
import uniq from 'lodash.uniq';

function mapAttributes(nameAttr, item) {
  const valueAttr = get(item, nameAttr);
  return {
    id: valueAttr.id,
    name: valueAttr.name,
    type: nameAttr,
  };
}

function mapOfferLinkToApply(offer) {
  const webSiteReference = get(offer, 'cms_sites_references.[0]');
  const webSites = get(offer, 'websites_urls', []);
  const webSiteInfo = webSites.find((item) => get(item, 'website_reference') === webSiteReference);
  return get(webSiteInfo, 'url');
}

export function mapOffersToState(data) {
  const { jobs } = data;

  const {
    contractTypes, publishedTimes, attributes, offers,
  } = jobs.reduce((acc, item) => {
    const publishedAt = dateToShow(item.published_at);
    return {
      ...acc,
      contractTypes: acc.contractTypes.concat(item.contract_type.en),
      publishedTimes: acc.publishedTimes.concat(publishedAt),
      offers: {
        ...acc.offers,
        [item.id]: {
          ...item,
          published_at: publishedAt,
          websiteReferenceUrl: mapOfferLinkToApply(item),
          websites_urls: undefined,
          cms_sites_references: undefined,
        },
      },
      attributes: {
        ...acc.attributes,
        [get(item, 'department.id')]: mapAttributes('department', item),
        [get(item, 'office.id')]: mapAttributes('office', item),
      },
    };
  }, {
    contractTypes: [],
    publishedTimes: [],
    attributes: {},
    offers: {},
  });

  return {
    attributesGroup: attributes,
    contractTypes: uniq(contractTypes),
    publishedTimes: uniq(publishedTimes),
    offers,
  };
}
