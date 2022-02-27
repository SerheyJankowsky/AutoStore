import React from 'react';
import m from './modal.module.css'

const Modal = ({children,active,keepActive}) => {
    const rootClass = [m.modal]
    if(active){
        rootClass.push(m.active)
    }
    return (
        <div className={rootClass.join(' ')} onClick={()=>keepActive(false)}>
            <div className={m.modal__content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;