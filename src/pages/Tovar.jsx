import module from './Tovar.module.css'
import React from 'react';
import vita from '../assets/vitamin.png'



function Tovar (props) {

    return (
        <div className={module.text}>
            <img className={module.vita} src={vita} />
            <div className={module.block}>
                <h1 className={module.h1}>Витамины для волос 60 капс</h1>
                <div className={module.like}>
                    <div className={module.kol}>
                    <h3 className={module.h3}>кол-во:</h3>
                        <div className={module.up}>
                        <i class="fa-solid fa-angle-up"></i>
                        <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div className={module.likes}><i class="fa-sharp fa-solid fa-heart"></i></div>
                </div>
                <button className={module.kor}>добавить  в корзину</button>
                <button className={module.karta}>добавить карту <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            
        </div>
    )
}

export default Tovar; 