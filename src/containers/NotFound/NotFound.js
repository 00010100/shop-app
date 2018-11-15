import React from 'react';
import { Link } from 'react-router';

import './NotFound.scss';

const NotFound = () => (
  <div className="NotFound">
    <div className="container">
      <div className="error">
        <p className="p">4</p>
        <span className="dracula">
          <div className="con">
            <div className="hair" />
            <div className="hair-r" />
            <div className="head" />
            <div className="eye" />
            <div className="eye eye-r" />
            <div className="mouth" />
            <div className="blod" />
            <div className="blod blod2" />
          </div>
        </span>
        <p className="p">4</p>

        <div className="page-ms">
          <p className="page-msg">Oops, the page you are looking for Disappeared</p>
          <Link to="/" className="go-back">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
