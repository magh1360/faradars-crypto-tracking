import React, { useRef } from "react";
import './Navbar.css';
import { Link } from "react-router-dom"
import { FaCoins } from "react-icons/fa"
const NavbarComponent = () => {
  const btnToggleRef = useRef();
  const toggleMenu = () => {
    btnToggleRef.current.click();

  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <FaCoins className="navbar-logo-icon" />
          <span className="navbar-logo-text">
            Crypto Tracking
          </span>
        </div>

        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={btnToggleRef}

        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav >
  );
};
export default NavbarComponent;
