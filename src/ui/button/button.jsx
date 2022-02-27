import React from 'react';
import b from './button.module.css'
const Button = ({children,handlerClick}) => {
    return (
        <button className={b.button} onClick={handlerClick}>
            {children}
        </button>
    );
};

export default Button;