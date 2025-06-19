import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Menubar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to show logout button

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 py-3">
      {/* Logo */}
      <div
        className="navbar-brand d-flex align-items-center"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <i className="bi bi-shield-lock-fill me-2"></i>
        Authify
      </div>

      {/* Auth Buttons */}
      <div>
        {isLoggedIn ? (
          <button
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};