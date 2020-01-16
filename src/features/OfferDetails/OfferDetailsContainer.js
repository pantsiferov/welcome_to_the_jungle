import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import get from 'lodash.get';

import { selectOfferById } from 'ducks/offers/selectors';
import OfferDetailsComponent from './OfferDetailsComponent';

const mapStateToProps = (state, ownProps) => {
  const offerId = get(ownProps, 'match.params.id');
  return ({
    offer: selectOfferById(state, offerId),
  });
};

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack()),
});


export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsComponent);
