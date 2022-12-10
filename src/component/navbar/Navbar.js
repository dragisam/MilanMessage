import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.css";

const Navbar = () => {
  const isAuth = true;
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-light  navbarCustom">
      <NavLink className="navbar-brand ps-3 " to="/home">
        IPS Search Engine
      </NavLink>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        to="#!"
      >
        <i className="fas fa-bars"></i>
      </button>
      <ul className="navbar-nav d-md-inline-block ms-auto me-0 me-md-3 my-2 my-md-0">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle-bell"
            id="navbarDropdown"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            //onClick={getStatus}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            {/* <span>{numStream}</span> */}
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            {/* <li className="dropdown-item">{stream}</li> */}
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw"></i>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/user"
            >
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
              Users
            </NavLink>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/register"
            >
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
              Register
            </NavLink>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/changepassword"
            >
              <i className="fas fa-key fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
              Change Password
            </NavLink>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/query"
            >
              <i className="fa fa-indent fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
              Query
            </NavLink>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/addquery"
            >
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Add
              query
            </NavLink>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/type"
            >
              <i className="fa fa-file fa-sm fa-fw mr-2 text-gray-400"></i> Type
            </NavLink>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/addtype"
            >
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Add
              type
            </NavLink>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/parameter"
            >
              <i className="fa fa-list-alt fa-sm fa-fw mr-2 text-gray-400"></i>{" "}
              Parameter
            </NavLink>
            <NavLink
              className="dropdown-item"
              activeClassName={styles.active}
              to="/addparameter"
            >
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Add
              parameter
            </NavLink>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink
                className="dropdown-item"
                to="/"
                activeClassName={styles.active}
                // onClick={onLogout}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
