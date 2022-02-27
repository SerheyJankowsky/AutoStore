import React from 'react';
import c from './card.module.css'
import s from "./mainScreen.module.css";
import {observer} from "mobx-react";
import lot from '../store/lotStore'
import basketStore from "../store/basketStore";
const Card = observer(() => {
    function addItem(e,data){
        e.preventDefault()
        basketStore.addItem(data)
    }
    return (
        <div className={s.cardContent}>
            {lot.lots.map(e=>
                    <div className={c.body} key={e.id}>
                    <img src={e.img} alt="Honda"/>
                     <h1>{e.auto}</h1>
                    <p>Можно использовать любой не занятый номер</p>
                    <div className={c.buttone}>
                    <button className={c.button} onClick={(i)=>addItem(i,e)}>Купить</button>
                </div>
                <div className={c.price}>
                    {`$${e.prices}`}
                </div>
            </div>
            )}

        </div>

    );
})

export default Card;