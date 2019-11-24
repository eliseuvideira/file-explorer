import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="l-app_footer footer">
      <h2 className="footer__header">File Explorer</h2>
      <label className="icon footer__label">language</label>
      <select className="footer__select">
        <option value="en-US">English</option>
        <option value="de-DE">Deutsch</option>
      </select>
    </footer>
  );
}

export default Footer;
