import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import { Box } from '@welcome-ui/box';
import { Text } from '@welcome-ui/text';

import FiltersForm from './FiltersForm';
import OfferDescription from './OfferDescription';

class OfferListComponent extends Component {
  componentDidMount() {
    const { fetchOffersRequest } = this.props;
    fetchOffersRequest();
  }

  renderOffers = () => {
    const { offers } = this.props;
    return (
      offers.map((item) => (
        <OfferDescription
          key={item.id}
          name={item.name}
          description={get(item, 'contract_type.en')}
          id={item.id}
        />
      ))
    );
  }

  render() {
    return (
      <Box
        backgroundColor="light.200"
        width="800px"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text variant="h3" color="secondary.700">Our offers</Text>
        </Box>
        <FiltersForm />
        <Box height="600px" overflow="auto">
          {this.renderOffers()}
        </Box>

      </Box>
    );
  }
}

OfferListComponent.propTypes = {
  fetchOffersRequest: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
};

OfferListComponent.defaultProps = {
  offers: [],
};

export default OfferListComponent;
