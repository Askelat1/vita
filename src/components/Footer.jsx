import React from "react";
import module from './Footer.module.css'
import logo from '../assets/logo.png'



function Footer(props) {
    return(
    <footer>
        <div className={module.footer}>
        <img className={module.logo} src={logo}></img>
        <div className={module.line}></div>
        <div>
            <h3 className={module.h3}>Информация</h3>
            <p className={module.h3_tittle}>О компании</p>
            <p className={module.h3_tittle}>Политика конфиденциальности</p>
            <p className={module.h3_tittle}>Как оформить заказ/доставку</p>
            <p className={module.h3_tittle}>Q/A</p>
        </div>
        <div className={module.line}></div>
        <div className={module.footer_2}>
            <h4 className={module.h4}>Контакты</h4>
            <a href="" className={module.icons}><i class="fa-brands fa-google"></i>Email</a>
            <a href="" className={module.icons}><i class="fa-brands fa-facebook"></i> Facebook</a>
            <a href="" className={module.icons}><i class="fa-brands fa-instagram"></i>Instagram</a>
            <a href="" className={module.icons}><i class="fa-solid fa-phone"></i>Phone number

</a>
        </div>
        </div>
    </footer>
    );


}
export default Footer;