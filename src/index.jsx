/**
 * PopX Mobile App - Entry Point
 * 
 * This file renders the PopX Mobile App into the DOM.
 * The app is mounted on the 'root' element with React StrictMode enabled
 * for additional development warnings and checks.
 * 
 * @author PopX Development Team
 * @version 1.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring for PopX Mobile App
// To measure app performance, you can implement analytics here
// Consider integrating with services like Google Analytics or Vercel Analytics
// For development, you can use console.log to track performance metrics
