import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '10px' }}>
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <a className="btn me-2 p-2" href="https://twitter.com" style={{ backgroundColor: '#1DA1F2', borderRadius: '50%', padding: '10px' }}>
            <FaTwitter size={20} color="white" />
          </a>
          <a className="btn me-2 p-2" href="https://facebook.com" style={{ backgroundColor: '#4267B2', borderRadius: '50%', padding: '10px' }}>
            <FaFacebook size={20} color="white" />
          </a>
          <a className="btn p-2" href="https://instagram.com" style={{ backgroundColor: '#C13584', borderRadius: '50%', padding: '10px' }}>
            <FaInstagram size={20} color="white" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
