import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAssignmentsDropdown, setShowAssignmentsDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const assignments = [
    { id: 1, title: 'Introduction & Documentation' },
    { id: 2, title: '2D Design & Cutting' },
    { id: 3, title: 'Hand tools and fabrication' },
    { id: 4, title: 'Microcontroller Programming' },
    { id: 5, title: '3D Design & Printing' },
    { id: 6, title: 'Electronic Input Devices' },
    { id: 7, title: 'MVP and Electronic Output Devices' },
    { id: 8, title: 'CNC Milling' },
    { id: 9, title: 'Radio, WiFi, Bluetooth (IoT)' },
    { id: 10, title: 'Machine Building and End Effectors' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowAssignmentsDropdown(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow mouse movement
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowAssignmentsDropdown(false);
    }, 150);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <span 
          className="navbar-brand" 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer' }}
        >
          Kevin's Portfolio
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => navigate('/')} 
                style={{ cursor: 'pointer' }}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              <span 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => navigate('/about')} 
                style={{ cursor: 'pointer' }}
              >
                About
              </span>
            </li>
            <li 
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <span 
                className={`nav-link dropdown-toggle ${isActive('/assignment') ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                id="assignmentsDropdown"
                role="button"
                aria-expanded={showAssignmentsDropdown}
                onClick={() => setShowAssignmentsDropdown(!showAssignmentsDropdown)}
              >
                Assignments
              </span>
              {showAssignmentsDropdown && (
                <ul 
                  className="dropdown-menu show"
                  aria-labelledby="assignmentsDropdown"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {assignments.map(assignment => (
                    <li key={assignment.id}>
                      <span
                        className={`dropdown-item ${location.pathname === `/assignment/${assignment.id}` ? 'active' : ''}`}
                        onClick={() => {
                          navigate(`/assignment/${assignment.id}`);
                          setShowAssignmentsDropdown(false);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        Assignment {assignment.id}: {assignment.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="nav-item">
              <span 
                className={`nav-link ${isActive('/final-project') ? 'active' : ''}`}
                onClick={() => navigate('/final-project')} 
                style={{ cursor: 'pointer' }}
              >
                Final Project
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
