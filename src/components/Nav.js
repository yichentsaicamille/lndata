import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';

import '../styles/nav.css';

function Nav() {
  return (
    <div className="main-header">
      <div className="banner">
        <img src="https://www.lndata.com/images/logo/logo_160.png" alt="" />
        <BsPersonCircle size={50} color="#17a8a2" className="icon" />
      </div>
      <div className="title-wrap">
        <div className="container">Player List</div>
      </div>
    </div>
  );
}

export default Nav;
