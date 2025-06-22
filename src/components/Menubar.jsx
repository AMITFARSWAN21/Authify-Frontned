import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Menubar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/v1.0/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        setIsLoggedIn(false);
        navigate('/login');
      } else {
        const data = await res.text();
        console.error('Logout failed:', data);
        alert('Logout failed');
      }
    } catch (err) {
      console.error('Logout error:', err);
      alert('Logout error');
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 py-3 d-flex justify-content-between">
      {/* Logo */}
      <div
        className="navbar-brand d-flex align-items-center"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <i className="bi bi-shield-lock-fill me-2"></i>
        Edu-Notes
      </div>

      {/* Middle Nav Items */}
      <div>
        {isLoggedIn && (
          <button
            className="btn btn-outline-secondary me-3"
            onClick={() => navigate('/notes')}
          >
            <i className="bi bi-journal-text me-2"></i>
            Notes
          </button>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="position-relative">
        {isLoggedIn ? (
          <>
            <button
              className="btn btn-outline-primary dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <i className="bi bi-person-circle me-2"></i>
              My Account
            </button>

            {showDropdown && (
              <div className="dropdown-menu show position-absolute end-0" style={{ minWidth: '160px' }}>
                <button 
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/profile');
                    setShowDropdown(false);
                  }}
                >
                  <i className="bi bi-person me-2"></i>
                  Profile
                </button>
                <div className="dropdown-divider"></div>
                <button 
                  className="dropdown-item text-danger"
                  onClick={() => {
                    handleLogout();
                    setShowDropdown(false);
                  }}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </div>
            )}
          </>
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
