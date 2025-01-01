import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({author}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <span
            className="bg-light text-dark rounded-circle d-inline-flex justify-content-center align-items-center"
            style={{ width: "32px", height: "32px" }}
          >
            B
          </span>
        </NavLink>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts/my" className="nav-link" href="#">
              My Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link" href="#">
              Users
            </NavLink>
          </li>
        </ul>

        <form className="d-flex me-3">
          <input
            className="form-control form-control-dark"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        {/* Profile Icon */}
        <div className="dropdown">
          <NavLink
            to="/user"
            className="bg-light text-dark rounded-circle text-decoration-none d-inline-flex justify-content-center align-items-center"
            id="dropdownUser"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "32px", height: "32px" }}
          >
            {author.first_name.slice(0 , 1)}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
