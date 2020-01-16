import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { fetchOffersRequest } from 'ducks/offers/reducer';
import { selectContractTypeReference, selectOffersWithFilters, selectPublishedTimes } from 'ducks/offers/selectors';
import OfferListComponent from './OfferListComponent';

const mapStateToProps = (state) => ({
  contractTypes: selectContractTypeReference(state),
  offers: selectOffersWithFilters(state),
  publishedTimes: selectPublishedTimes(state),
});

const mapDispatchToProps = {
  fetchOffersRequest,
  push,
};


export default connect(mapStateToProps, mapDispatchToProps)(OfferListComponent);
