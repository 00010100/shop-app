import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
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

Cart.propTypes = {
  totalCartCount: PropTypes.number,
  totalPrice: PropTypes.number,
};

const mapStateToProps = (state) => ({
  totalCartCount: getTotalCartCount(state),
  totalPrice: getTotalCartPrice(state),
});

export default connect(
  mapStateToProps,
  null,
)(Cart);
