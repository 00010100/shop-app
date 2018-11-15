import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';
import Backdrop from 'components/Backdrop/Backdrop';

export default class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    children: PropTypes.object,
    modalClosed: PropTypes.func,
  };

  shouldComponentUpdate(nextProps) {
    const { show, children } = this.props;

    return nextProps.show !== show || nextProps.children !== children;
  }

  render() {
    const { show, modalClosed, children } = this.props;

    return (
      <div>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className="Modal"
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}
