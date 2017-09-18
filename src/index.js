import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'fela';
import { Provider as StyleProvider, ThemeProvider } from 'react-fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';

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

renderer.renderStatic(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    color: '#111',
    textAlign: 'center',
    backgroundColor: '#fff',
    margin: '0',
    padding: '0',
  },
  'html,body,#root'
);

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
