import React from 'react';
import s from './mainScreen.module.css'
import Title from "./title";
import Card from "./card";


const MainScreen = () => {
    return (
        <div className={s.main_screen}>
            <Title title={'Скидки на автомобили'} parag={'скоро'}/>
            <Card/>
        </div>
    );
}

export default MainScreen;