import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { CookiesProvider } from 'react-cookie';
import createReducer from './redux/reducers';
import App from './containers/App';
import './i18n';

const MOUNT_NODE = document.getElementById('app');
const reducer = createReducer();
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CookiesProvider>,
  MOUNT_NODE
);
