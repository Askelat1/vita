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
            {/* <Link to="/content">Главная</Link> */}
            <a className={module.nav_item} href="/">Главная</a>
            <a className={module.nav_item} href="/catalog">Каталог</a>
            <a className={module.nav_item} href="/tovar">Корзина</a>
            <a className={module.nav_item} href="/tovar_2">Корзина</a>
        </div>
        
    ) : (
        <div className={module.nav_block}>
            <a className={module.nav_item} href="/mainOffice">Личный кабинет</a>
        </div>
        );

        const nav_icons = (user)? (
            <nav className={module.nav}>                
                <div className={module.icon}>
                    <Link to="/korzina"><img className={module.nav__item} src={shop}></img></Link>
                    <Link to="#"><img className={module.nav__item} src={favorite}></img></Link>
                    <Link to="/main"><img className={module.nav__item} src={login}></img></Link>
                    {/* <Link to="#"><img className={module.nav__item} src={search}></img></Link> */}
                </div>
            </nav>
        ) : (
            <nav className={module.nav}>                
                <div className={module.icon}>
                    <img className={module.nav__item} src={shop}></img>
                    <img className={module.nav__item} src={favorite}></img>
                    <Link to="/mainOffice"><img className={module.nav__item} src={login}></img></Link>
                    {/* <img className={module.nav__item} src={search}></img> */}
                </div>
            </nav>
        )

    return (
        <header>
            <nav className={module.nav}>
                <Link to='/'><img className={module.logo} src={logo}></img></Link>
                {nav_links}
                {nav_icons}
                
            </nav>
        </header>
    );
}

export default Header;
