import module from './Tovar_2.module.css'
import React from 'react';
import vita from '../assets/vin1.png'
import fon from '../assets/fon.png'
import like from '../assets/love.png'
import shop from '../assets/shop_2.png'


function Tovar_2 (props) {

    return (
        <div className={module.fon}>
            <div className={module.block}>
                <div className={module.main_text}> Витамины для волос <br /> 60 капс</div>
                <div className={module.container}>
                    <div className={module.cont_1}>
                        <div className={module.cont_1_img}></div>
                    </div>
                    <div className={module.cont_2}>
                        <div className={module.cont_2_text}>Улучшает микроциркуляцию и энергообеспечение волосяных фолликулов, препятствуя их выпадению.Стимулирует синтез коллагена и кератина, способствует росту волос.</div>
                        <div className={module.infor}>подробнее</div>
                    </div>
                </div>
                <div className={module.kol}>
                        <div className={module.kol_box}>
                            <h3 className={module.h3}>кол-во:</h3>
                            <div className={module.up}>
                                <i class="fa-solid fa-angle-up"></i>
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div className={module.icon}>
                            <img className={module.icon_like} src={like}></img>
                            <img className={module.icon_shop} src={shop}></img>
                        </div>
                </div>
                <div className={module.form}>
                            <div className={module.karta2}>
                                <button className={module.karta}>оформить сейчас <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
            </div>
            
            
        </div>
        

    )
}

export default Tovar_2; 