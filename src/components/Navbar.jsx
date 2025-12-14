import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = ({ title = "Netflix" }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAll = () => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Brand */}
        <NavLink className="nav-brand" to="/" onClick={closeAll}>
          {title}
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle ${isMobileOpen ? 'active' : ''}`}
          onClick={toggleMobile}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${isMobileOpen ? 'active' : ''}`}>
          <NavLink className="nav-link" to="/netflixhome" onClick={closeAll}>Home</NavLink>
          <NavLink className="nav-link" to="/netflixmovie" onClick={closeAll}>Movies</NavLink>
          <NavLink className="nav-link" to="/netflixshows" onClick={closeAll}>Shows</NavLink>

          {/* Props Dropdown */}
          <div className="nav-dropdown">
            <button
              className={`nav-link dropdown-btn ${openDropdown === 'props' ? 'active' : ''}`}
              onClick={() => toggleDropdown('props')}
            >
              Props ▾
            </button>
            <div className={`dropdown-content ${openDropdown === 'props' ? 'active' : ''}`}>
              <NavLink className="dropdown-link" to="/user" onClick={closeAll}>Users</NavLink>
              <NavLink className="dropdown-link" to="/employee" onClick={closeAll}>Employee</NavLink>
              <NavLink className="dropdown-link" to="/book" onClick={closeAll}>Book</NavLink>
            </div>
          </div>

          {/* Forms Dropdown */}
          <div className="nav-dropdown">
            <button
              className={`nav-link dropdown-btn ${openDropdown === 'forms' ? 'active' : ''}`}
              onClick={() => toggleDropdown('forms')}
            >
              Forms ▾
            </button>
            <div className={`dropdown-content ${openDropdown === 'forms' ? 'active' : ''}`}>
              <NavLink className="dropdown-link" to="/formvalidation" onClick={closeAll}>Form 1</NavLink>
              <NavLink className="dropdown-link" to="/formvalidation1" onClick={closeAll}>Form 2</NavLink>
              <NavLink className="dropdown-link" to="/formvalidation2" onClick={closeAll}>Form 3</NavLink>
              <NavLink className="dropdown-link" to="/formvalidation3" onClick={closeAll}>Form 4</NavLink>
              <NavLink className="dropdown-link" to="/patternvalidate" onClick={closeAll}>Pattern</NavLink>
              <NavLink className="dropdown-link" to="/checkbox" onClick={closeAll}>CheckBox</NavLink>
              <NavLink className="dropdown-link" to="/formvalidation5" onClick={closeAll}>Form 5</NavLink>
              <NavLink className="dropdown-link" to="/jobapplication" onClick={closeAll}>Job Application</NavLink>
              <NavLink className="dropdown-link" to="/passwordmatch" onClick={closeAll}>Password Match</NavLink>
            </div>
          </div>

          {/* API Dropdown */}
          <div className="nav-dropdown">
            <button
              className={`nav-link dropdown-btn ${openDropdown === 'api' ? 'active' : ''}`}
              onClick={() => toggleDropdown('api')}
            >
              API ▾
            </button>
            <div className={`dropdown-content ${openDropdown === 'api' ? 'active' : ''}`}>
              <NavLink className="dropdown-link" to="/apifetch" onClick={closeAll}>API Fetch Data</NavLink>
              <NavLink className="dropdown-link" to="/apifetch1" onClick={closeAll}>API Fetch Data 1</NavLink>
              <NavLink className="dropdown-link" to="/omdbapi" onClick={closeAll}>OMDB API</NavLink>
              <NavLink className="dropdown-link" to="/postapi" onClick={closeAll}>API Post Demo</NavLink>
              <NavLink className="dropdown-link" to="/postapiform" onClick={closeAll}>API Post Demo</NavLink>

               <NavLink className="dropdown-link" to="/postproductapi" onClick={closeAll}>API Post Product</NavLink>
               <NavLink className="dropdown-link" to="/updateuser" onClick={closeAll}>API Post Product</NavLink>
              <NavLink className="dropdown-link" to="/login" onClick={closeAll}>Login API</NavLink>
              <NavLink className="dropdown-link" to="/tokenset" onClick={closeAll}>Api Demo Token</NavLink>
            
            </div>
          </div>

          <div className="nav-dropdown">
            <button
              className={`nav-link dropdown-btn ${openDropdown === 'hook' ? 'active' : ''}`}
              onClick={() => toggleDropdown('hook')}
            >
              Hook ▾
            </button>
            <div className={`dropdown-content ${openDropdown === 'hook' ? 'active' : ''}`}>
                <NavLink className="dropdown-link" to="/useref" onClick={closeAll}>Use Ref </NavLink>
              <NavLink className="dropdown-link" to="/userefcolor" onClick={closeAll}>Use Ref </NavLink>
                <NavLink className="dropdown-link" to="/usememo" onClick={closeAll}>Use Memo </NavLink>

            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};
