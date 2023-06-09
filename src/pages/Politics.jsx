import module from './Politics.module.css'
import React from 'react';
import fon2 from '../assets/fon2.png'
import one from '../assets/one.svg'
import two from '../assets/two.svg'
import three from '../assets/three.svg'
import four from '../assets/four.svg'
import five from '../assets/five.svg'



function politics (props){
    return(
        <div>
            <div className={module.fons}>
                <h2 className={module.h2}>Политика конфиденциальности</h2>
            <img className={module.fon2} src={fon2}></img>
            </div>


            <h1 className={module.h1}>
            Vita с вниманием относятся к неприкосновенности персональных данных. Настоящая Политика конфиденциальности содержит описание видов персональных данных, которые мы собираем о частных лицах с помощью нашего веб-сайта и мобильных приложений, описание того, как мы можем использовать эти данные, с кем мы можем делиться этими данными и доступных вариантов использования нами данных. Политика конфиденциальности также содержит описание мер, которые мы принимаем для защиты персональных данных, сроки хранения данных и методы, которые могут использовать физические лица для связи с нами и получения информации о способах защиты конфиденциальных данных и использования имеющихся у них прав.
             <br />
             <br />

Данные, которые мы получаем<br />
В связи с использованием вами Сервисов вы можете предоставлять нам свои персональные данные несколькими способами. Список видов персональных данных, которые мы получаем:
            </h1>


            <div>
                <div className={module.one1} >
                <img className={module.one} src={one} ></img >
                <h3 className={module.h3}>-контактные данные (имя, адрес электронной почты, адрес<br />
доставки, почтовый индекс и инструкции по отправке, номер телефона и<br />
удостоверение личности)</h3>

                </div>

                <div className={module.one1} >
                <img className={module.one} src={two}></img>
                <h3 className={module.h3}>-учетные данные, используемые для создания аккаунта в Сервисах </h3>

                </div>

                <div className={module.one1} >
                <img src={three}></img>
                <h3 className={module.h3}>-информация из вашего профиля в социальной сети в тех случаях, когда<br />
вы решаете использовать ваш аккаунт в социальной сети для создания<br />
аккаунта в Сервисах</h3>

                </div>

                <div className={module.one1} >
                <img src={four}></img>
                <h3 className={module.h3}>-генерируемый пользователем контент, связанный с отзывами на<br /> продукты, комментариями, вопросами и ответами</h3>

                </div>

               

                <div className={module.one1} >
                <img src={five}></img>
                <h3 className={module.h3}>-платежные данные, например, имя, расчетный адрес, номер счета и
данные платежной карты для платежей, обрабатываемых нами. При совершении платежей, обрабатываемых любыми сторонними организациями действия в отношении этих данных определяютсяполитикой конфиденциальности этих организаций;</h3>

                </div>








            </div>





            <div className={module.h1_}>
            <h1 >
                

                <ul>
                <li>данные, предоставляемые при участии в конкурсах, розыгрышах и исследованиях;</li>
                <li>данные из социальных сетей, например, имя пользователя в социальной</li>
                <li>сети, контент и прочие данные, которыми вы делитесь с нами через</li>
                <li>сторонние функции, используемые на наших Сервисах (например, приложения,</li>
                <li>инструменты, платежные сервисы, виджеты и плагины, предлагаемые такими</li>
                <li>социальными сетями как Facebook, Google, Instagram, LinkedIn, Pinterest,</li>
                <li>Twitter и YouTube), или публикуете на страницах в социальных сетях</li>
                <li>(например, на наших страницах в социальных сетях или прочих доступных</li>
                <li>прочие персональные данные, которые содержатся в контенте, который вы публикуете в Сервисах;</li>
                <li>страна/регион и языковые предпочтения на основании настроек мобильного устройства или IP-адреса;</li>
                <li>IP-адрес, устройство, операционная система и данные о браузере, которые мы определили.</li>
                </ul></h1>
            </div>



        
        </div>
    )}
    export default politics