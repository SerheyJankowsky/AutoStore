import React from 'react';
import t from './tytle.module.css'
const Title = ({title,parag}) => {
    return (
        <div className={t.container_title}>
            <h1>
                {title}
            </h1>
            <p>
                {parag}
            </p>
        </div>

    );
};

export default Title;