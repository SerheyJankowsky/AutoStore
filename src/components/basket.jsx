import React from 'react';
import b from './basket.module.css'
import BasketCard from "./basketCard";
import Button from "../ui/button/button";
import basketStore from "../store/basketStore";
import {observer} from "mobx-react";
const Basket = observer(({click}) => {
    return (
        <div className={b.basket}>
            <p>Корзина</p>
            <BasketCard/>
            {basketStore.total>0?<div className={b.bye}>
                <div className={b.total}>
                    <h5>Итог</h5>
                    <p>${basketStore.total}</p>
                </div>
                <Button handlerClick={click}>
                    Оформить
                </Button>
            </div>:<div></div>}
        </div>
    );
})

export default Basket;