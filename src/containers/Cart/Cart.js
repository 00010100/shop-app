import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { removeFruitFromCart, cleanCart } from 'actions';
import { getTotalCartPrice, getCartFruitsWithCount } from 'selectors';

import './Cart.scss';

const Cart = ({ fruits, totalPrice, removeFruitFromCart, cleanCart }) => {
  const isCartEmpty = fruits.length === 0;

  const renderContent = () => (
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

  const renderSidebar = () => (
    <div>
      <Link to="/" className="btn btn-info">
        <span className="glyphicon glyphicon-info-sign" />
        <span> Continue Shopping</span>
      </Link>
      {!isCartEmpty && (
        <div>
          <button className="btn btn-danger" onClick={cleanCart}>
            <span className="glyphicon glyphicon-trash"></span>
            <span> Clear Cart</span>
          </button>
          <button className="btn btn-success" onClick={() => {}}>
            <span className="glyphicon glypicon-envelope">Checkout</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => (console.log(state),{
  fruits: getCartFruitsWithCount(state),
  totalPrice: getTotalCartPrice(state),
});

const mapDispatchToProps = {
  removeFruitFromCart,
  cleanCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
