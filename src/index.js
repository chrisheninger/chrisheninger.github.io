import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'fela';
import { Provider as StyleProvider, ThemeProvider } from 'react-fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import './index.css';

import App from './App';
import theme from './app-theme';
import { unregister } from './registerServiceWorker';

// Fela
const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue()],
});

// The provider will automatically render the styles
// into the mountNode on componentWillMount
const mountNode = document.getElementById('stylesheet');

// Bootstrap the React app
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyleProvider renderer={renderer} mountNode={mountNode}>
      <App />
    </StyleProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

unregister();
