import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './helpers/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './contexts/ThemeContext';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { isDev } from './config';

if (!isDev()) {
  Sentry.init({
    dsn: 'https://92cd6255e1e74973abe0dd0516b730ec@o921438.ingest.sentry.io/5867837',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
