import React from 'react';
import bc from './bsketCard.module.css'
import {observer} from "mobx-react";
import basketStore from "../store/basketStore";
const BasketCard = observer(() => {
    return (
        <div className={bc.cards}>
            {basketStore.items<1?<h3 style={{color:'white'}}>Корзина пустая</h3>:basketStore.items.map(e=>
                <div className={bc.card} key={e.id}>
                <img src={e.img} alt=""/>
                <div className={bc.info}>
                    <h3>{e.auto}</h3>
                    <p>{`$${e.prices}`}</p>
                </div>
                    <div className={bc.action}>
                        <div className={bc.total}>
                            {e.count}
                        </div>
                        <button className={bc.delete} onClick={()=>basketStore.removeItem(e.id,e.prices)}>X</button>
                    </div>
            </div>)}
        </div>

    );
})

export default BasketCard;