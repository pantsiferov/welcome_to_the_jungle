import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box } from '@welcome-ui/box';

import OffersList from './features/OffersList';

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
        <Route exact path="/" component={OffersList} />
        <Route exact path="/about-us" component={OffersList} />
      </Switch>
    </Box>
  </Box>

);

export default App;
