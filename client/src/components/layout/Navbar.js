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
      <span className="iconify" data-icon={iconLogout} data-inline="false"></span>
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
        <span className="iconify" data-icon={iconHome} data-inline="false"></span>
          <b>Home</b>
        </NavLink>
        <NavLink to='/work' activeClassName='active'>
        <span className="iconify" data-icon={iconProjects} data-inline="false"></span>
          <b>Work</b>
        </NavLink>
        <NavLink to='/skills' activeClassName='active'>
        <span className="iconify" data-icon={iconSkills} data-inline="false"></span>
          <b>Skills</b>
        </NavLink>
        <NavLink to='/contact' activeClassName='active'>
        <span className="iconify" data-icon={iconContact} data-inline="false"></span>
          <b>Contact</b>
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
        <span className="iconify" data-icon={iconAbout} data-inline="false"></span>
          <b>About</b>
        </NavLink>
        {isAuthenticated ? authLinks : ""}
      </nav>
      <div className='social'>
        <a href='https://github.com/alexandrujeman' target='_blank' rel='noopener noreferrer'>
          <span className="iconify" data-icon={iconGithub} data-inline="false"></span>
        </a>
        <NavLink to='/info' alt='logo'>
        <span className="iconify" data-icon={iconInfo} data-inline="false"></span>
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
  iconGithub: "il:github",
  iconAbout: "mdi:heart-pulse",
  iconHome: "typcn:globe",
  iconProjects: "bx:bxs-flask",
  iconContact: "mdi:satellite-variant",
  iconSkills: "bx:bx-dna",
  iconInfo: "uil:info-circle",
  iconLogout: "bx:bx-lock"
};

export default Navbar;
