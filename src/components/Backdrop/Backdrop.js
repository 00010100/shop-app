import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const Backdrop = (props) => props.show && <div onClick={props.clicked} className="Backdrop" />;

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;
