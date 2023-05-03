import module from './MainPages.module.css'
import React from 'react';
import glav from '../assets/glavnaya.png'
import main1 from '../assets/main1.png'
import main2 from '../assets/main2.png'
import main3 from '../assets/main3.png'
import mainw from '../assets/mainw.svg'
import mainman from '../assets/mainman.svg'
import user from '../assets/user.png'


function MainPages (props){
    return(
        <div>
            <img src={glav} alt="" className={module.glav} />

            <div>
                <h1 className={module.h1}>Свежие новинки</h1>
                <div className={module.block}>
                    <div className={module.block_}>
                        <div className={module.imgblock}>
                            <img src={main1} alt={main1} />
                        </div>
                        <h2 className={module.h2m}>
                        Креатин моногидрат <br/> вкус цитруса 150 гр
                        </h2>
                    </div>
                    
                    <div className={module.block_}>
                        <div className={module.imgblock}>
                            <img src={main2} alt={main1} />
                        </div>
                        <h2 className={module.h2m}>
                        Креатин моногидрат <br/>  вкус цитруса 150 гр
                        </h2>
                    </div>

                    <div className={module.block_}>
                        <div className={module.imgblock}>
                            <img src={main3} alt={main1} />
                        </div>
                        <h2 className={module.h2m}>
                        Креатин моногидрат <br/>  вкус цитруса 150 гр
                        </h2>
                    </div>

                </div>

                <div className={module.block_2}>
                <h3 className={module.h3}>Популярные продукции</h3>
                <div className={module.block}>
                    <div>
                        <div className={module.imgblock_2}>
                            <img src={main1} alt="" />
                        </div>
                        <h2 className={module.h2m_}>
                        Креатин моногидрат <br/> вкус цитруса 150 гр
                        </h2>
                    </div>
                    
                    <div>
                        <div className={module.imgblock_2}>
                            <img src={main2} alt="" />
                        </div>
                        <h2 className={module.h2m_}>
                        Креатин моногидрат <br/>  вкус цитруса 150 гр
                        </h2>
                    </div>

                    <div>
                        <div className={module.imgblock_2}>
                            <img src={main3} alt="" />
                        </div>
                        <h2 className={module.h2m_}>
                        Креатин моногидрат <br/>  вкус цитруса 150 гр
                        </h2>
                    </div>
                </div>
                </div>

                <h1 className={module.h1}>
                Отзывы от наших клиентов
                </h1>
                <div>
                    <div className={module.woman}>
                        <img src={mainw} alt="" className={module.mainman} />
                        <div className={module.woman_2}>
                            <h5 className={module.h5}>Качество товара отличное, давно пользуюсь <br/> этой фирмой витаминов, эти приобрела маме, она в восторге.</h5>
                        </div>
                    </div>

                    <div className={module.man}>
                    <div className={module.woman_2}>
                            <h5 className={module.h5}>Удобный прием. Полезен для спортсменов. <br/> При приеме предыдущей банки заметил, <br/>что перестало сводить ноги при сильных нагрузках.</h5>
                        </div>
                        <img src={mainman} alt=" " className={module.mainman} />
                        
                    </div>

                </div>

            </div>
            <div className={module.block5}>
                <div  className={module.user_}><img src={user} alt="" /></div>
                <div  className={module.input}><input className={module.input_}   placeholder="Оставьте ваш отзыв" /></div>
            </div>
            <div className={module.buttonSend}><button className={module.send}>Отправить</button></div>
        </div>
    )
}

export default MainPages; 