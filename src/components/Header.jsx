import React from "react";
import module from './Header.module.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import shop from '../assets/shop.png'
import favorite from '../assets/favorite.png'
import login from '../assets/login.png'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../app/firebase'


function Header(props) {
    const [user] = useAuthState(auth)

    const nav_links = (user)? (
        <div className={module.nav_block}>
            <a className={module.nav_item} href="/tovar">Главная</a>
            <a className={module.nav_item} href="/tovar_2">Товары</a>
            <a className={module.nav_item} href="/tovar">Корзина</a>
            {/* <a className={module.nav_item} href="/mainOffice">Личный кабинет</a> */}
            <a className={module.nav_item} href="/main">main</a>
        </div>
    ) : (
        <div className={module.nav_block}>
            {/* <a className={module.nav_item} href="/regist">Регистрация</a> */}
            {/* <a className={module.nav_item} href="/removePass">Сменить пароль</a> */}
            {/* <a className={module.nav_item} href="/newPass">Новый пароль</a> */}
            {/* <a className={module.nav_item} href="/authorization">Авторизация</a> */}
            <a className={module.nav_item} href="/mainOffice">Личный кабинет</a>
            {/* <a className={module.nav_item} href="/main">main</a> */}
        </div>
        )

        

    return (
        <header>
            <nav className={module.nav}>
                <img className={module.logo} src={logo}></img>
                {nav_links}
                <div className={module.icon}>
                    <img className={module.nav__item} src={search}></img>
                    <img className={module.nav__item} src={shop}></img>
                    <img className={module.nav__item} src={favorite}></img>
                    <Link to="/mainOffice"><img className={module.nav__item} src={login}></img></Link>
                </div>
                <div className={module.burger}>
                <i class="fa-solid fa-bars"></i>
                <div className={module.burger_nav}>
                    <div className={module.burger_text}>
                        <ul>
                            <li>Главная</li>
                            <li>Каталог</li>
                            <li>Товары</li>
                            <li>О нас</li>
                        </ul>
                    </div>
                </div>
                </div>
            </nav>
        </header>

        // <header className='header'>
        //     <nav className='nav'>
        //         <div className="nav-block">
        //             <img className="logo" src={logo} alt="" />
        //             <div className='nav__item'><a href="/regist">Регистрация</a></div>
        //             <div className='nav__item'><a href="/">Сменить пароль</a></div>
        //             <div className='nav__item'><a href="/newPass">Новый пароль</a></div>
        //             <div className='nav__item'><a href="/mainOffice">Личный кабинет</a></div>
        //         </div>
                
        //     </nav>
        // </header>
    );
}

export default Header;
