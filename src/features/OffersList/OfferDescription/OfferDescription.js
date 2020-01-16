import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Card } from '@welcome-ui/card';
import { Box } from '@welcome-ui/box';
import { Button } from '@welcome-ui/button';
import { Text } from '@welcome-ui/text';
import { Link } from '@welcome-ui/link';


function OfferDescription(props) {
  const { name, description, id } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Card lineHeight="1" width="700px">
        <Card.Body backgroundColor="primary.200">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="flex-start"
              flexDirection="column"
            >
              <Text
                variant="h6"
                fontWeight="bold"
                mt={0}
                mb="lg"
                color="dark.200"
              >
                {name}
              </Text>
              <Text variant="meta2" as="p">
                Contract type -
                {' '}
                {description}
              </Text>
            </Box>
            <Link borderBottom={0} as={RouterLink} to={`/offers/${id}`}>
              <Button variant="quaternary">
                See more
              </Button>
            </Link>
          </Box>
        </Card.Body>
      </Card>
    </Box>
  );
}

OfferDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

OfferDescription.defaultProps = {
  name: '',
  description: '',
  id: null,
};

export default OfferDescription;
