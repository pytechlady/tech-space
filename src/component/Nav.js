import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5 p-4 fixed-top" style={{backgroundColor: "blue"}}>
  <div className="container">
              <div class="col d-flex align-items-end">
                        <img src={Logo} alt="theLogo"/>
                        <p className="text-light ms-2">TechSpace</p>
              </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ms-5">
        <Link className="nav-link text-light" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="nav-link text-light" to="/services">
            Services
          </Link>
        </li>
        <li className="nav-item ms-5">
          <Link  style={{width: "120px"}} type="button" class="btn btn-success" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Nav


