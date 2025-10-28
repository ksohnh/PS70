import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import assignmentComponents from './assignments';

const AssignmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

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
    { id: 10, title: 'Machine Building and End Effectors' },
    { id: 11, title: 'Project Integration' },
    { id: 12, title: 'Machine Demo / Wildcard' },
    { id: 13, title: 'Next Steps' },
    { id: 14, title: 'Project Prep' }
  ];

  const assignmentId = parseInt(id);
  const AssignmentComponent = assignmentComponents[assignmentId];

  // Handle Command+K shortcut
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setShowSearchOverlay(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (query) => {
    const trimmedQuery = query.trim().toLowerCase();
    
    if (!trimmedQuery) {
      return;
    }

    // Check for exact matches first
    if (trimmedQuery === 'about me' || trimmedQuery === 'about') {
      navigate('/about');
      return;
    }

    if (trimmedQuery === 'final project' || trimmedQuery === 'final') {
      navigate('/final-project');
      return;
    }

    // Check for assignment matches
    const assignmentMatch = assignments.find(assignment => 
      assignment.title.toLowerCase().includes(trimmedQuery) ||
      trimmedQuery.includes(assignment.id.toString()) ||
      assignment.id.toString() === trimmedQuery
    );

    if (assignmentMatch) {
      navigate(`/assignment/${assignmentMatch.id}`);
      return;
    }
  };

  const handleOverlaySearch = (query) => {
    setShowSearchOverlay(false);
    handleSearch(query);
  };

  const handleOverlayKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleOverlaySearch(event.target.value);
    }
  };

  if (!AssignmentComponent) {
    return (
      <div className="notes-page">
        <div className="notes-container">
          <div className="notes-title">Assignment Not Found</div>
          <div className="notes-content">
            The requested assignment could not be found.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-page">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <span className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Kevin's Portfolio
          </span>
          <div className="navbar-nav ms-auto">
            <span className="nav-link" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              Home
            </span>
          </div>
        </div>
      </nav>

      <div className="notes-container">
        <AssignmentComponent />
      </div>

      {/* Search Overlay */}
      {showSearchOverlay && (
        <div className="search-overlay" onClick={() => setShowSearchOverlay(false)}>
          <div className="search-overlay-content" onClick={(e) => e.stopPropagation()}>
            <h5 className="mb-3">Search Portfolio</h5>
            <input
              type="text"
              placeholder="Search assignments, about me, or final project..."
              onKeyPress={handleOverlayKeyPress}
              autoFocus
            />
            <div className="mt-3">
              <small className="text-muted">Press Enter to search or click outside to close</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentPage;
