import module from './AboutUs.module.css'
import React from 'react';
import fon2 from '../assets/fon2.png'
import one1 from '../assets/one1.svg'
import two2 from '../assets/two2.svg'
import three3 from '../assets/three3.svg'
import four4 from '../assets/four4.svg'
import five5 from '../assets/five5.svg'
import six6 from '../assets/six6.svg'




function about (props){
    return(
        <div>
            <div className={module.fons}>
                <h2 className={module.h2}>О нас</h2>
            <img className={module.fon2} src={fon2}></img>
            </div>

            <h1 className={module.h1}>Интернет-магазин <span>Vita</span> начал
            <br /> свою работу в мае 2012 года и с тех пор наша команда
            <br /> постоянно работает над тем,
            <br />чтобы клиенты оставались довольны<br /> качеством наших услуг.</h1>


            <div className={module.section2}>
                <h1 className={module.h1_}>
                У нас Вы сможете приобрести полный спектр
                витаминов для всей семьи: 
                </h1>
                <div className={module.block}>
                    <div  className={module.second}>
                        <img src={one1} alt={one1} />
                        <h4 className={module.h4}>Женщин</h4>
                    </div>

                    <div className={module.second}>
                        <img src={two2} alt={two2} />
                        <h4 className={module.h4}>Мужчин</h4>
                    </div>

                    <div className={module.second}>
                        <img src={three3} alt={three3} />
                        <h4 className={module.h4}>Беременных</h4>
                    </div>

                    <div className={module.second}>
                        <img src={four4} alt={four4} />
                        <h4 className={module.h4}>Детей</h4>
                    </div>

                    <div className={module.second}>
                        <img src={five5} alt={five5} />
                        <h4 className={module.h4}>Спортсменов</h4>
                    </div>

                    <div className={module.second}>
                        <img src={six6} alt={six6} />
                        <h4 className={module.h4}>Пожилых</h4>
                    </div>
                </div>
                
            </div>


            <h3 className={module.h3}>Здесь Вы также сможете найти богатый выбор витаминных комплексов
            <br /> для здоровья и красоты Вашей кожи, волос и ногтей.</h3>


            <div className={module.fons_}>
                <h4 className={module.h5}>В интернет-магазине Vita можно купить не только витамины, но и косметику, спортивное
                питание, суперфуды. Продукция, представленная в нашем магазине, поможет Вам
                продлить молодость, укрепить здоровье и наслаждаться жизнью.</h4>
            <img className={module.fon3} src={fon2}></img>
            </div>
        
        
        
        </div>
    )}
    export default about