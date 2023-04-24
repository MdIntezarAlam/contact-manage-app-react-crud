import React from "react";
import { Link, NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg p-3 navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Contact-Manager-App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                App-One
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/app-two">
                App-Two
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
