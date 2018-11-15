import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTotalCartCount, getTotalCartPrice } from 'selectors';

import './Cart.scss';

const Cart = ({ totalCartCount, totalPrice }) => (
  <div className="cart">
    <div className="dropdown">
      <Link to="/cart" id="dLabel" className="btn btn-lg btn-inverse btn-block">
        <i className="fa fa-shoping-cart">
          <span>
            {totalCartCount} item(s) - ${totalPrice}
          </span>
        </i>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  totalCartCount: getTotalCartCount(state),
  totalPrice: getTotalCartPrice(state),
});

export default connect(
  mapStateToProps,
  null,
)(Cart);
