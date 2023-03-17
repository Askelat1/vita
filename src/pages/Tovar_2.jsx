import module from './Tovar_2.module.css'
import React from 'react';
import vita from '../assets/vitamin.png'

function Tovar_2 (props) {

    return (
        <div className={module.fon}>
            <div className={module.text}>
            <img className={module.vita} src={vita} />
            <div className={module.block}>
                <h1 className={module.h1}>Витамины для волос 60 капс</h1>
                <div className={module.p}>
                    <p>
                Улучшает микроциркуляцию и энергообеспечение волосяных фолликулов, препятствуя их выпадению.Стимулирует синтез коллагена и   кератина, способствует росту волос.</p></div>
                <div className={module.like}>
                    <div className={module.kol}>
                    <h3 className={module.h3}>кол-во:</h3>
                        <div className={module.up}>
                        <i class="fa-solid fa-angle-up"></i>
                        <i class="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                    <div className={module.likes}><i class="fa-sharp fa-solid fa-heart">
                    <i class="fa-regular fa-bag-shopping"></i> 
                    </i>
                    </div>
                </div>
                
                <div className={module.karta2}>
                <button className={module.karta}>оформить сейчас <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
        </div>
        </div>

    )
}

export default Tovar_2; 