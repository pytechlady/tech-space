import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import '../App.css';

const Nav = () => {
  const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5 p-4 fixed-top" style={{backgroundColor: "blue"}}>
  <div className="container">
              <Link className="links" to="/">
                <Logo/>
              </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="ms-5">
        <Link exact className={splitLocation[1] === "" ? "active" : "links"} to="/">
        Home
          </Link>
          </li>
        
          <li className="ms-5">
          <Link className={splitLocation[1] === "services" ? "active" : "links"} to="/services">
          Services
          </Link>
          </li>
        
          <li className="ms-5">
          <Link className={splitLocation[1] === "contact" ? "active" : "links"} to='/contact'>
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


