import module from './Kabinet.module.css'
import React from 'react';
import fon2 from '../assets/fon2.png'
import user from '../assets/user.png'
import fonf from '../assets/fonf.png'


function Kabinet (props){
    return(
        <div>
            <div className={module.fons}>
                <h2 className={module.h2}>Личный кабинет</h2>
            <img className={module.fon2} src={fon2}></img>
            </div>
            <div className={module.block1}>
                <img src={user} alt="" />
                <div className={module.Name}>
                    <h1 className={module.h1}>Имя</h1>
                    <h3 className={module.h3}>+996 5003 208 700</h3>
                    <h3 className={module.h3}>Мой город: Бишкек</h3>
                </div>
                <div className={module.block_h4}>
                    <h4>Избранные товары</h4>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div>
                <img className={module.fonf} src={fonf} alt="" />
            </div>
        </div>
        
    )
}

export default Kabinet;