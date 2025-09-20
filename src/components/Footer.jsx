import React from 'react';

const Footer = () => {
  return (
<footer className="footer">
  <nav className="footer-nav">
    <a href="#accueil">À mon sujet</a>
    <a href="#portfolio">Moment de vie</a>
    <a href="#contact">Contact</a>
  </nav>
  <p>© 2025 KaroStudio. Tous droits réservés.</p>
  <a href="/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions légales</a>
</footer>
  );
};

export default Footer;