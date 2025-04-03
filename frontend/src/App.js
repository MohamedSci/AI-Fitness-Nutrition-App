import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfileForm from './components/UserProfileForm';
import Recommendations from './components/Recommendations';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>AI-Powered Fitness & Nutrition</h1>
                    <p>Get personalized recommendations based on your profile.</p>
                </header>
                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<UserProfileForm />} />
                        <Route path="/recommendations" element={<Recommendations />} />
                    </Routes>
                </main>
                <footer className="App-footer">
                    <p>&copy; 2025 AI Fitness & Nutrition</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;