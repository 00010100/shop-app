import * as _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ApiService from 'utils/api';
import { fetchFruits, addFruitToCart } from 'actions';
import { getFruits } from 'selectors';

import Spinner from 'components/Spinner/Spinner';

import './Fruits.scss';

@connect(
  (state) => ({
    fruits: getFruits(state),
  }),
  { fetchFruits, addFruitToCart },
)
class Fruits extends Component {
  apiService = new ApiService();

  static propTypes = {
    fruits: PropTypes.array,
    fetchFruits: PropTypes.func,
    addFruitToCart: PropTypes.func,
  }

  componentDidMount() {
    this.apiService.getFruits().then(({ fruits }) => {
      this.props.fetchFruits(fruits);
    });
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps.fruits, this.props.fruits);
  }

  renderFruit(fruit) {
    const { addFruitToCart } = this.props;

    return (
      <div className="col-sm-3 col-lg-3 col-md-3" key={fruit.id}>
        <div className="thumbnail fruit-container">
          {fruit.sale && <div className="fruit-sale"><span>Sale</span></div>}
          <img className="img-thumbnail" src={fruit.image} alt={fruit.name} />
          <div className="fruit-content">
            <h4 className="">${fruit.price}</h4>
            <button className="btn btn-primary" onClick={() => addFruitToCart(fruit)}>
              Buy now!
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { fruits } = this.props;

    if (_.size(fruits) === 0) return <Spinner />;

    return <div className="row">{_.map(fruits, (fruit) => this.renderFruit(fruit))}</div>;
  }
}

export default Fruits;
