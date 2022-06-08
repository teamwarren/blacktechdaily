import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const date = new Date();
const year = date.getFullYear();

/**
 * Renders footer
 * @param {string} mode - light or dark for color theme
 * @returns {object}
 */
const Footer = ({ mode }) => {
  return (
    <div className={`footer footer-${mode}`}>&copy; {year} | TeamWarren</div>
  );
};

Footer.propTypes = {
  mode: PropTypes.string,
};

export default Footer;
