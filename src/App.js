import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import AssignmentPage from './components/AssignmentPage';
import AboutPage from './components/AboutPage';
import FinalProjectPage from './components/FinalProjectPage';

function App() {
  return (
    <Router basename="/PS70">
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assignment/:id" element={<AssignmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/final-project" element={<FinalProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;