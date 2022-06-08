import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

/**
 * Renders footer
 * @param {string} mode - light or dark for color theme
 * @returns {object}
 */
const Footer = ({ mode }) => {
  return (
    <div className={`footer footer-${mode}`}>&copy; 2022 | TeamWarren</div>
  );
};

Footer.propTypes = {
  mode: PropTypes.string,
};

export default Footer;
