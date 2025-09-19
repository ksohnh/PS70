import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalProjectPage = () => {
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
        <div className="notes-title">Final Project</div>
        <div className="notes-content">
          <p>This is where you can document your final project.</p>
          
          <h4>Project Overview</h4>
          <p>Provide a comprehensive overview of your final project, including its purpose and goals.</p>
          
          <h4>Design Process</h4>
          <p>Document your design process, including sketches, prototypes, and iterations.</p>
          
          <h4>Implementation</h4>
          <p>Detail the technical implementation, including hardware, software, and fabrication processes.</p>
          
          <h4>Results & Testing</h4>
          <p>Show your results, testing procedures, and any challenges you encountered.</p>
          
          <h4>Future Improvements</h4>
          <p>Discuss potential improvements and future iterations of your project.</p>
          
          {/* Placeholder for user content */}
          <div style={{ 
            border: '2px dashed #CDD3CE', 
            padding: '20px', 
            textAlign: 'center', 
            color: '#CDD3CE',
            marginTop: '20px'
          }}>
            Add your final project content here
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

export default FinalProjectPage;
