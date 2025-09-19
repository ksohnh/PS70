import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const assignments = [
    { id: 1, title: 'Introduction & Documentation' },
    { id: 2, title: '2D Design & Cutting' },
    { id: 3, title: 'Hand tools and fabrication' },
    { id: 4, title: 'Microcontroller Programming' },
    { id: 5, title: '3D Design & Printing' },
    { id: 6, title: 'Electronic Input Devices' },
    { id: 7, title: 'Electronic Output Devices' },
    { id: 8, title: 'CNC Milling' },
    { id: 9, title: 'Radio, WiFi, Bluetooth (IoT)' },
    { id: 10, title: 'Machine Building and End Effectors' },
    { id: 11, title: 'Project Integration' },
    { id: 12, title: 'Machine Demo / Wildcard' },
    { id: 13, title: 'Next Steps' },
    { id: 14, title: 'Project Prep' }
  ];

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
        <div className="notes-title">About Me</div>
        <div className="notes-content">
          <p>This is where you can add information about yourself.</p>
          
          <h4>Personal Information</h4>
          <p>Add your personal details, background, and interests here.</p>
          
          <h4>Education & Experience</h4>
          <p>Include your educational background and relevant experience.</p>
          
          <h4>Skills & Interests</h4>
          <p>List your technical skills, hobbies, and areas of interest.</p>
          
          <h4>Contact Information</h4>
          <p>Add your contact details and social media links.</p>
          
          {/* Placeholder for user content */}
          <div style={{ 
            border: '2px dashed #CDD3CE', 
            padding: '20px', 
            textAlign: 'center', 
            color: '#CDD3CE',
            marginTop: '20px'
          }}>
            Add your about me content here
          </div>
        </div>
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

export default AboutPage;
