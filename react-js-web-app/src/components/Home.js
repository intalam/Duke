import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './home.style.css'

const Home = (props) => {

  return (
    <div className="container">
      <div className="item-container">
        <Link to="/fad">
          <div className="item">
            FAD
        </div>
        </Link>
      </div>

      <div className="item-container">
        <Link to="/fad-render-prop">
          <div className="item">
            FAD Render Props
        </div>
        </Link>
      </div>

    </div>
  )
};

export default Home;