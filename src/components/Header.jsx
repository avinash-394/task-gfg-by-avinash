import React from "react";
import "../styles/GlobalHeader.css";

const Header = () => (
  <header className="global-header">
    <div className="header-section header-left">
      <img src="/logo.png" alt="gfgprime logo" className="header-logo" />
      <span className="header-brand">gfgprime</span>
    </div>
    <nav className="header-section header-center" aria-label="Main navigation">
      <a href="#events" className="header-link">Events</a>
      <a href="#dashboard" className="header-link">Dashboard</a>
      <a href="#community" className="header-link">Community</a>
    </nav>
    <div className="header-section header-right">
      <a href="#profile" className="header-link">Profile</a>
      <a href="#logout" className="header-link">Logout</a>
    </div>
  </header>
);

export default Header;
