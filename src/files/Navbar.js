import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar({ showMainLink, showDropdown }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          {showMainLink && (
            <li className="nav-item">
              <Link className="nav-link" to="/main1">
                Explore!
              </Link>
            </li>
          )}
        </ul>
        <Link
          className="navbar-brand mx-auto text-center"
          to="/"
          style={{
            fontFamily: "Righteous, cursive",
            fontSize: "1.5em",
          }}
        >
          The Locals
        </Link>
        <ul className="navbar-nav">
          {showDropdown && (
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  style={{ backgroundColor: "#1b9db7", border: "none" }}
                >
                  <i className="bi bi-person-circle text-white"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/account">My Account</Dropdown.Item>
                  <Dropdown.Item href="/recommend">
                    Recommend a Place
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item href="/">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;













