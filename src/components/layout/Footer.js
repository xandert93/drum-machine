import React from 'react';

function Footer() {
  return (
    <footer className="footer" title="Visit GitHub page">
      &copy;{' '}
      <a
        className="footer__link footer__link--github"
        href="https://github.com/xandert93"
        target="_blank"
        rel="noopener noreferrer"
      >
        xandert.93
      </a>
    </footer>
  );
}

export default Footer;
