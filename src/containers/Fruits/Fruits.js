import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiService from 'utils/api';
import { fetchFruits } from 'actions';

import './Fruits.scss';

@connect(
  (state) => ({
    fruits: state.fruits.fruits,
  }),
  { fetchFruits },
)
class Fruits extends Component {
  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getFruits().then(({ fruits }) => {
      this.props.fetchFruits(fruits);
    });
  }

  renderFruit(fruit, index) {
    return (
      <div className="col-sm-3 col-lg-3 col-md-3 book-list" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={fruit.image} alt={fruit.name} />
          <div className="fruit-content">
            <h4 className="">${fruit.price}</h4>
            <button className="btn btn-primary" onClick={() => {}}>
              Buy now!
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { fruits } = this.props;

    if (!fruits) return <div />;

    return (
      <div className="row">{fruits.map((fruit, index) => this.renderFruit(fruit, index))}</div>
    );
  }
}

export default Fruits;
