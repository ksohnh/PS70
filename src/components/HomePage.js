import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showInvalidSearch, setShowInvalidSearch] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Assignment data
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

  // Popular/suggested queries
  const popularQueries = [
    'about me',
    'final project',
    '3d design',
    'microcontroller',
    'electronics',
    'cnc milling',
    'iot',
    'machine building',
    'project integration'
  ];

  // All searchable items
  const allSearchableItems = [
    ...assignments.map(assignment => ({
      type: 'assignment',
      id: assignment.id,
      title: assignment.title,
      searchTerms: [assignment.title.toLowerCase(), assignment.id.toString()]
    })),
    {
      type: 'page',
      id: 'about',
      title: 'About Me',
      searchTerms: ['about me', 'about']
    },
    {
      type: 'page',
      id: 'final-project',
      title: 'Final Project',
      searchTerms: ['final project', 'final']
    }
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

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const suggestions = [];

    // Add matching assignments
    allSearchableItems.forEach(item => {
      const matches = item.searchTerms.some(term => 
        term.includes(query) || query.includes(term)
      );
      if (matches) {
        suggestions.push({
          type: item.type,
          id: item.id,
          title: item.title,
          query: item.searchTerms[0]
        });
      }
    });

    // Add popular queries that match
    popularQueries.forEach(popularQuery => {
      if (popularQuery.includes(query) && !suggestions.some(s => s.query === popularQuery)) {
        suggestions.push({
          type: 'popular',
          id: popularQuery,
          title: popularQuery,
          query: popularQuery
        });
      }
    });

    setFilteredSuggestions(suggestions.slice(0, 8)); // Limit to 8 suggestions
  }, [searchQuery]);

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (event) => {
    if (!showSuggestions || filteredSuggestions.length === 0) {
      if (event.key === 'Enter') {
        handleSearch(searchQuery);
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          const selectedSuggestion = filteredSuggestions[selectedSuggestionIndex];
          setSearchQuery(selectedSuggestion.query);
          handleSearch(selectedSuggestion.query);
        } else {
          handleSearch(searchQuery);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
        break;
    }
  };

  const handleSearch = (query) => {
    const trimmedQuery = query.trim().toLowerCase();
    
    if (!trimmedQuery) {
      setShowInvalidSearch(false);
      setShowSuggestions(false);
      return;
    }

    // Check for exact matches first
    if (trimmedQuery === 'about me' || trimmedQuery === 'about') {
      navigate('/about');
      setShowSuggestions(false);
      return;
    }

    if (trimmedQuery === 'final project' || trimmedQuery === 'final') {
      navigate('/final-project');
      setShowSuggestions(false);
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
      setShowSuggestions(false);
      return;
    }

    // If no match found, show invalid search
    setShowInvalidSearch(true);
    setShowSuggestions(false);
    setTimeout(() => setShowInvalidSearch(false), 3000);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.query);
    handleSearch(suggestion.query);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
    setSelectedSuggestionIndex(-1);
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => setShowSuggestions(false), 200);
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
    <div className="homepage">
      <div className="logo">Kevin's Portfolio</div>
      
      <div className="search-container">
        <input
          ref={searchRef}
          type="text"
          className="search-box"
          placeholder="Search assignments, about me, or final project..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        
        {/* Suggestions Dropdown */}
        {showSuggestions && (filteredSuggestions.length > 0 || searchQuery.trim() === '') && (
          <div className="suggestions-dropdown">
            {searchQuery.trim() === '' ? (
              // Show popular queries when search is empty
              <div className="suggestions-section">
                <div className="suggestions-header">Popular searches</div>
                {popularQueries.slice(0, 6).map((query, index) => (
                  <div
                    key={query}
                    className={`suggestion-item ${selectedSuggestionIndex === index ? 'selected' : ''}`}
                    onClick={() => handleSuggestionClick({ query, title: query })}
                  >
                    <span className="suggestion-icon">🔍</span>
                    <span className="suggestion-text">{query}</span>
                  </div>
                ))}
              </div>
            ) : (
              // Show filtered suggestions when typing
              <div className="suggestions-section">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={`${suggestion.type}-${suggestion.id}`}
                    className={`suggestion-item ${selectedSuggestionIndex === index ? 'selected' : ''}`}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <span className="suggestion-icon">
                      {suggestion.type === 'assignment' ? '📝' : 
                       suggestion.type === 'page' ? '📄' : '🔍'}
                    </span>
                    <span className="suggestion-text">{suggestion.title}</span>
                    {suggestion.type === 'assignment' && (
                      <span className="suggestion-type">Assignment {suggestion.id}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {showInvalidSearch && (
          <div className="invalid-search">
            Invalid search request
          </div>
        )}
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

export default HomePage;
