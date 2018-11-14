import React from 'react';
import { connect } from 'react-redux';
import { getTotalCartCount, getTotalCartPrice } from 'selectors';

const Cart = ({ totalCartCount, totalPrice }) => (
  <div className="cart">
    <div className="dropdown">
      <button className="btn btn-lg btn-inverse btn-block">
        <i className="fa fa-shoping-cart">
          <span>
            {totalCartCount} item(s) - ${totalPrice}
          </span>
        </i>
      </button>
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
