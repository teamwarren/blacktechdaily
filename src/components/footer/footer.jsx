import React from 'react';
import './footer.css';

const Footer = props => {
  return (
    <div className={`footer-${props.mode}`}>&copy; 2020 | TeamWarren</div>
    )
  }

export default Footer;