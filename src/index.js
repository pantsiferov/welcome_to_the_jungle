import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@xstyled/styled-components';
import { createTheme, GlobalStyle } from '@welcome-ui/core';
import store, { history } from './store';
import App from './AppLayout';

import 'sanitize.css/sanitize.css';

const options = {
  defaultFontFamily: 'Helvetica',
  headingFontFamily: 'Georgia',
  colors: {
    primary: {
      200: '#E3F0EC',
    },
  },
  cards: {
    default: {
      overflow: 'auto',
    },
  },
  fontSizes: {
    h6: '1rem',
  },
};
// Create your theme
const theme = createTheme(options);

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target,
);
