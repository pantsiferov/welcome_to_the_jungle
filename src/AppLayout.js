import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Box } from '@welcome-ui/box';

import OffersList from './features/OffersList';
import OfferDetails from './features/OfferDetails';

const App = () => (
  <Box
    display="flex"
    width={1}
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
  >
    <Box padding="50px">
      <Switch>
        <Route exact path="/offers" component={OffersList} />
        <Route exact strict path="/offers/:id" component={OfferDetails} />
        <Route exact path="*" render={() => <Redirect to="/offers" />} />
      </Switch>
    </Box>
  </Box>

);

export default App;
