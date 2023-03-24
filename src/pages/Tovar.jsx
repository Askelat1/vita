import module from './Tovar.module.css'
import React from 'react';
import fon1 from '../assets/fon.png'
import vin1 from '../assets/vin1.png'
import vin2 from '../assets/vin2.png'
import vin3 from '../assets/vin3.png'



function Tovar (props) {

    return (
        <div >
            <div className={module.block0}>
            <h1 className={module.h1}>Бесплатная доставка по всему Кыргызстану & возврат в течение 30 дней</h1>
        </div>
        <div className={module.block1}>
            <div className={module.tovars}>
                
                <div className={module.block2}>
                    <img className={module.vin1}src={vin1} alt="" />
                <div>
                    <h2 className={module.h2}>Solgar 
Неронутриенс
30 капсул</h2>
                </div>
                <div className={module.plus}>
                <div className={module.krug}><i class="fa-solid fa-minus"></i></div>
                    <h4 className={module.h4}>1</h4>
                <div className={module.krug}><i class="fa-solid fa-plus"></i></div>
                </div>
                <div><h3 className={module.h3}>850 сом</h3></div>
                </div>


                <div className={module.line}></div>
                

                
                <div className={module.block2}>
                <img className={module.vin2}src={vin2} alt="" />
                <div>
                    <h2 className={module.h2}>GLS
Коллаген с гиалуроновой 
кислотой и витамином С 
180 капс</h2>
                </div>
            
                <div className={module.plus}>
                <div className={module.krug}><i class="fa-solid fa-minus"></i></div>
                    <h4 className={module.h4}>1</h4>
                    <div className={module.krug}><i class="fa-solid fa-plus"></i></div>
    
                </div>
                <div><h3 className={module.h3}>1800 сом</h3></div></div>


                <div className={module.line}></div>
                

                
                <div className={module.block2}>
                    <img className={module.vin3}src={vin3} alt="" />
                <div><h2 className={module.h2}>GLS
Витамины для волос
60 капсул</h2></div>
<div className={module.plus}>
<div className={module.krug}><i class="fa-solid fa-minus"></i></div>
                    <h4 className={module.h4}>1</h4>
                    <div className={module.krug}><i class="fa-solid fa-plus"></i></div>
    
                </div>
                
                <div><h3 className={module.h3}>1400 сом</h3></div></div>
                

            </div>
            <div className={module.line1}></div>
            <div className={module.block3}>
                <div className={module.itog}>
                    <h3>
                    Итого <br />
4050 сом
                    </h3>
                </div>
                <button className={module.button}>Оформить заказ</button>
            </div>
        </div>
        </div>
    )
}

export default Tovar; 