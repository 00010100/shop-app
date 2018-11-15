import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import store from 'store';
import App from 'containers/App';
import Fruits from 'containers/Fruits/Fruits';
import Cart from 'containers/Cart/Cart';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider key={module.hot ? Date.now() : store} store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Fruits} />
      </Route>
      <Route path="/cart" component={Cart} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
