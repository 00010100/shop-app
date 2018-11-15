import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Modal from 'containers/Modal/Modal';
import { removeFruitFromCart, cleanCart } from 'actions';
import { getTotalCartPrice, getCartFruitsWithCount } from 'selectors';

import './Cart.scss';

@connect(
  (state) => ({
    fruits: getCartFruitsWithCount(state),
    totalPrice: getTotalCartPrice(state),
  }),
  {
    removeFruitFromCart,
    cleanCart,
  },
)
class Cart extends Component {
  static propTypes = {
    fruits: PropTypes.array,
    totalPrice: PropTypes.number,
    removeFruitFromCart: PropTypes.func,
    cleanCart: PropTypes.func,
  };

  state = {
    purchase: false,
  };

  purchaseHandler = () => {
    this.setState({ purchase: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchase: false });
  };

  renderContent = () => {
    const { fruits, totalPrice, removeFruitFromCart } = this.props;
    const isCartEmpty = fruits.length === 0;

    return (
      <div>
        {isCartEmpty && <div>Your shopping cart is empty</div>}

        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {fruits.map((fruit, index) => (
                <tr key={index} className="item-checkout">
                  <td className="first-column-checkout">
                    <img className="img-thumbnail" src={fruit.image} alt={fruit.name} />
                  </td>
                  <td>{fruit.name}</td>
                  <td>${fruit.price}</td>
                  <td>{fruit.count}</td>
                  <td>
                    <span className="delete-cart" onClick={() => removeFruitFromCart(fruit.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!isCartEmpty && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total: </b>${totalPrice}
            </div>
          </div>
        )}
      </div>
    );
  };

  renderSidebar = () => {
    const { fruits, cleanCart } = this.props;
    const isCartEmpty = fruits.length === 0;

    return (
      <div>
        <Link to="/" className="btn btn-info">
          <span className="glyphicon glyphicon-info-sign" />
          <span> Continue Shopping</span>
        </Link>
        {!isCartEmpty && (
          <div>
            <button className="btn btn-danger" onClick={cleanCart}>
              <span className="glyphicon glyphicon-trash" />
              <span> Clear Cart</span>
            </button>
            <button className="btn btn-success" onClick={this.purchaseHandler}>
              <span className="glyphicon glypicon-envelope">Checkout</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="view-container">
        <Modal show={this.state.purchase} modalClosed={this.purchaseCancelHandler}>
          <span>{`Thank you for purchase :)`}</span>
        </Modal>
        <div className="container">
          <div className="row">
            <div className="col-md-9">{this.renderContent()}</div>
            <div className="col-md-3 btn-user-checkout">{this.renderSidebar()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
