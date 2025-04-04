import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfileForm from './components/UserProfileForm';
import Recommendations from './components/Recommendations';
import './styles/theme.css';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">FitAI Coach</h1>
          <p className="app-subtitle">Your personalized fitness & nutrition guide</p>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<UserProfileForm />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} FitAI Coach</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;