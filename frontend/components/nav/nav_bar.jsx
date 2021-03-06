import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';

const Nav = (props) => {
  const { currentUser, logout } = props;
  const navButtons = currentUser ? (
    <>
      <a
        href="https://www.linkedin.com/in/david-ross-988426216/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="upgrade">Upgrade to Pro</button>
      </a>
      <div className="profile-dropdown">
        <div className="profile-pic" />
      </div>
      <ul className="user-dropdown">
        <li>
          <div className="dd-logout" onClick={logout}>
            Logout
          </div>
        </li>
      </ul>

      <div />
    </>
  ) : (
    <>
      <Link to="/signup" className="sign-up-button">
        Sign Up
      </Link>
      <Link to="/login" className="login-button">
        Log In
      </Link>
    </>
  );

  return (
    <nav className="nav-bar">
      <div className="nav-links" />
      <div className="logo-title-div">
        <Link to="/" className="logo-title">
          <FontAwesomeIcon icon={faMountain} className="mountain-logo" />
          <h2>MoreTrails</h2>
          <div className="pro-tag" />
        </Link>
      </div>
      <div className="nav-buttons">{navButtons}</div>
    </nav>
  );
};

export default Nav;
