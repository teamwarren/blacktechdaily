import React from 'react';
import './button.css'

const Button = props => {
    return (
        <button className="button" onClick={props.toggleMode}>{props.modeText} mode</button>
    )
}

export default Button;