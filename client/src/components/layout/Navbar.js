import React, { useContext } from "react";
import logo from "../../cute-skull.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ProjectContext from "../../context/project/projectContext";

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
  const projectContext = useContext(ProjectContext);

  const { isAuthenticated, logout } = authContext;
  const { clearProjects } = projectContext;

  const onLogout = () => {
    logout();
    clearProjects();
  };

  const authLinks = (
    <a onClick={onLogout} href='#!'>
      <i className='material-icons-outlined'>{iconLogout}</i>
      <b>Logout</b>
    </a>
  );

  return (
    <div className='navbar'>
      <NavLink to='/' alt='logo'>
        <img src={logo} className='app-logo' alt='AJ' />
        <div className='text-logo'>{title}</div>
      </NavLink>
      <nav>
        <NavLink exact to='/' activeClassName='active'>
          <i className='material-icons-outlined'>{iconHome}</i>
          <b>Home</b>
        </NavLink>
        <NavLink to='/work' activeClassName='active'>
          <i className={iconProjects}></i>
          <b>Work</b>
        </NavLink>
        <NavLink to='/skills' activeClassName='active'>
          <i className={iconSkills}></i>
          <b>Skills</b>
        </NavLink>
        <NavLink to='/contact' activeClassName='active'>
          <i className={iconContact}></i>
          <b>Contact</b>
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
          <i className={iconAbout}></i>
          <b>About</b>
        </NavLink>
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
        <NavLink to='/info' alt='logo'>
          <i className='material-icons-outlined'>{iconInfo}</i>
        </NavLink>
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
