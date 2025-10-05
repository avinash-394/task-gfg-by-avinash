import React from "react";

const Footer = () => (
  <footer className="footer-bar">
    <div className="footer-content">
      <span>&copy; {new Date().getFullYear()} gfgprime. All rights reserved.</span>
      <span className="footer-made">Made with <span style={{color: '#A78BFA'}}>&#10084;</span> for developers.</span>
    </div>
  </footer>
);

export default Footer;
