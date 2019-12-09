import React from "react";
import logo from "../../cute-skull.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className='navbar'>
      <Link to='/' alt="logo">
        <img src={logo} className='app-logo' alt='AJ' />
        <div className='text-logo'>{title}</div>
      </Link>
      <nav className='nav'>
        <a href=''></a>
      </nav>
      <nav>
        <div>Visitor Links</div>
        <div>Admin Links</div>
      </nav>
      <div className="social" >
        <a href='https://github.com/alexandrujeman' target="_blank" rel="noopener noreferrer">
          <i className='fab fa-github-alt'></i>
        </a>
        <li>Social Link 2</li>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Alex"
};

export default Navbar;
