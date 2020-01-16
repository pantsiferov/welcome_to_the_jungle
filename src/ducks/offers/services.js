import Request from '../../services/api';

export function fetchOffers() {
  return Request.get('embed?organization_reference=Pg4eV6k');
}
