import React from 'react';
import './Navbar.css'; // Make sure this is still imported if you are using custom styles elsewhere
import logo from './logo.png';
import './Signin.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" className="logo"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="http://localhost:5173/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:5173/Signin">Sign in</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="http://localhost:3000/personal">Risk Assessment</a>
              <a className="dropdown-item" href="http://localhost:3000/groups">Financial Management</a>
              <a className="dropdown-item" href="http://localhost:5173/Blog">Risk Adjustment guide</a>
              <a className="dropdown-item" href="http://localhost:5173/Networth">Networth calculator</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Contact Us</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}
