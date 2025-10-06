import React from "react";
import '../assets/css/error404.css'

export const Error404 = () => {
  return (
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="error-illustration">
          <div className="astronaut">
            <i className="fas fa-user-astronaut"></i>
          </div>
          <div className="planet"></div>
          <div className="satellite">
            <i className="fas fa-satellite"></i>
          </div>
        </div>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search our website..."
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="actions">
          <button className="btn btn-primary" id="goBack" onClick={() => window.history.back()}>
            <i className="fas fa-arrow-left"></i> Go Back
          </button>
          <a href="/" className="btn btn-secondary">
            <i className="fas fa-home"></i> Homepage
          </a>
          <a href="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Contact Support
          </a>
        </div>

        <p className="status">
          If this problem persists, please contact our support team.
        </p>

        <div className="footer">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
  
  );
};

export default Error404;
