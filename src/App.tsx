import React from 'react';
import './App.css';

function App() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="app-container">
      <div className="header">
        <h1>💖 365 Days BBG 💖</h1>
        <p className="tagline">"Getting Lost in You? That’s My Daily Routine, BBG."</p>
        <p className="date">Today: {today}</p>
      </div>

      <div className="button-container">
        <a href="#" className="btn">Today’s Message</a>
        <a href="#" className="btn">Memories Gallery</a>
        <a href="#" className="btn">Surprise Me (Sunday)</a>
        <a href="#" className="btn">About Us</a>
      </div>

      <div className="footer">Made with 💘 by Juii</div>
    </div>
  );
}

export default App;
