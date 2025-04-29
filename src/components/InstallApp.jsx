// src/components/InstallApp.jsx
import React from 'react';
import './InstallApp.css';

const InstallApp = () => {
  return (
    <div className="install-container">
      <div className="text-section">
        <h1>Install <span className="brand-name">deSk</span> App</h1>
        <p>
          Over <strong>1M+ downloads</strong>. Rated <strong>4.8★</strong> on the App Store and <strong>4.6★</strong> on Play Store.
        </p>
        <div className="store-buttons">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <button className="app-store-btn">🍎 App Store</button>
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <button className="play-store-btn">📱 Play Store</button>
          </a>
        </div>
      </div>

      <div className="qr-code">
        <img src="./src/assets/qr.jpg" alt="QR Code to install app" />
        <p className="qr-hint">Scan to install</p>
      </div>

      <div className="app-image">
        <img src="./src/assets/logo.png" alt="deSk App Interface" />
      </div>
    </div>
  );
};

export default InstallApp;
