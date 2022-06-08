import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Render a button
 *
 * @param {string} modeText
 * @param {Function} toggleMode
 * @returns {object}
 */
const Button = ({ modeText, toggleMode }) => {
  return (
    <button className='button' onClick={toggleMode}>
      {modeText} mode
    </button>
  );
};

Button.propTypes = {
  modeText: PropTypes.string,
  toggleMode: PropTypes.func,
};

export default Button;
