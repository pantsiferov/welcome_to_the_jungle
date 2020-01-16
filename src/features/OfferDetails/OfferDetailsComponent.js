import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { Box } from '@welcome-ui/box';
import { Text } from '@welcome-ui/text';
import { Card } from '@welcome-ui/card';
import { Button } from '@welcome-ui/button';


function OfferDetailsComponent(props) {
  const { offer, goBack } = props;
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
        <Text variant="h3" color="secondary.700">Job description</Text>
      </Box>

      <Box
        padding="10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text as="span" variant="h3">
          {get(offer, 'name', '')}
        </Text>
        <Button
          variant="secondary"
          onClick={goBack}
        >
          go back
        </Button>
      </Box>

      <Box padding="10px">
        <Card lineHeight="1">
          <Card.Body backgroundColor="primary.200">
            <Text variant="h3">
              Description
            </Text>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: get(offer, 'description', '') }} />
          </Card.Body>
        </Card>

      </Box>

      <Box padding="10px">
        <Card lineHeight="1">
          <Card.Body backgroundColor="primary.200">
            <Text variant="h3">
              Profile
            </Text>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: get(offer, 'profile', '') }} />
          </Card.Body>
        </Card>
      </Box>

      <Box
        padding="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >

        <Button
          as="a"
          href={offer.websiteReferenceUrl}
          target="_blank"
          rel="noopener nofollow"
          variant="secondary"
          size="lg"
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
}

OfferDetailsComponent.propTypes = {
  offer: PropTypes.objectOf(PropTypes.object),
  goBack: PropTypes.func.isRequired,
};

OfferDetailsComponent.defaultProps = {
  offer: {},
};

export default OfferDetailsComponent;
