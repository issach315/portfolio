import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{ padding: '10px' }}>
      {/* NavLink elements */}
      <div className="navbar-nav mx-auto"> {/* Using mx-auto class to center-align NavLink elements */}
        <NavLink className="nav-link btn btn-primary mr-3" exact to="/">Home</NavLink> {/* Increased margin-right to 25px */}
        <NavLink className="nav-link btn btn-success mr-3" to="/about">About</NavLink> {/* Increased margin-right to 25px */}
        <NavLink className="nav-link btn btn-warning mr-3" to="/services">Services</NavLink> {/* Increased margin-right to 25px */}
        <NavLink className="nav-link btn btn-danger" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
