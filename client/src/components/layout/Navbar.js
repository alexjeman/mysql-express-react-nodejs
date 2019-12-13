import React, { useContext } from "react";
import logo from "../../cute-skull.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({
  title,
  iconHome,
  iconSkills,
  iconProjects,
  iconAbout,
  iconContact,
  iconGithub,
  iconInfo,
  iconLogout
}) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <a onClick={onLogout} href='#!'>
      <i className='material-icons-outlined'>{iconLogout}</i>
      <b>Logout</b>
    </a>
  );

  return (
    <div className='navbar'>
      <Link to='/' alt='logo'>
        <img src={logo} className='app-logo' alt='AJ' />
        <div className='text-logo'>{title}</div>
      </Link>
      <nav>
        <Link to='/'>
          <i className='material-icons-outlined'>{iconHome}</i>
          <b>Home</b>
        </Link>
        <Link to='/work'>
          <i className={iconProjects}></i>
          <b>Work</b>
        </Link>
        <Link to='/skills'>
          <i className={iconSkills}></i>
          <b>Skills</b>
        </Link>
        <Link to='/contact'>
          <i className={iconContact}></i>
          <b>Contact</b>
        </Link>
        <Link to='/about'>
          <i className={iconAbout}></i>
          <b>About</b>
        </Link>
        {isAuthenticated ? authLinks : ""}
      </nav>
      <div className='social'>
        <a
          href='https://github.com/alexandrujeman'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className={iconGithub}></i>
        </a>
        <Link to='/info' alt='logo'>
          <i className='material-icons-outlined'>{iconInfo}</i>
        </Link>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Alex",
  iconGithub: "fab fa-github-alt",
  iconAbout: "fas fa-heartbeat",
  iconHome: "home",
  iconProjects: "fas fa-flask",
  iconContact: "fas fa-satellite",
  iconSkills: "fas fa-dna",
  iconInfo: "info",
  iconLogout: "lock"
};

export default Navbar;
