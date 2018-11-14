import React from 'react';

import Cart from 'components/Cart/Cart';

const Layout = ({ children }) => (
  <div className="view-container">
    <div className="container">
      <div className="row">
        <div className="col-md-9">{children}</div>
        <div className="col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;