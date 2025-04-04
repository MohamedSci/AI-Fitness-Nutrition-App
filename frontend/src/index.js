import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';  // Added .js extension
import './styles/theme.css';
import './styles/animations.css';
import reportWebVitals from './reportWebVitals.js';  // Added .js extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();