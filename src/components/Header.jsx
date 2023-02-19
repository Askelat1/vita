import React from "react";
import module from './Header.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import shop from '../assets/shop.png'
import favorite from '../assets/favorite.png'
import login from '../assets/login.png'


function Header(props) {
    return (
        <header>
            <nav className={module.nav}>
                <img className="logo" src={logo}></img>
                <div className="nav-block">
                    <ul>
                        <li><a className="nav-item" href="/regist">Регистрация</a></li>
                        <li><a className="nav-item" href="/">Сменить пароль</a></li>
                        <li><a className="nav-item" href="/newPass">Новый пароль</a></li>
                        <li><a className="nav-item" href="/mainOffice">Личный кабинет</a></li>
                    </ul>
                    {/* <a className="nav-item" href="/">Сменить пароль</a>
                    <a className="nav-item" href="/newPass">Новый пароль</a>
                    <a className="nav-item" href="/mainOffice">Личный кабинет</a> */}
                </div>
                <div className="icon">
                    <img className="icon-item" src={search}></img>
                    <img className="icon-item" src={shop}></img>
                    <img className="icon-item" src={favorite}></img>
                    <Link to="/regist"><img className="icon-item" src={login}></img></Link>
                </div>
                <div className="burger">
                    <span></span>
                {/* <i class="fa-solid fa-bars"></i> */}
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
// document.querySelector('.burger').addEventListener('click', function() {
//     this.classList.add('open');
//     // document.querySelector('nav-block').classList.toggle('open')
// })

// const burger = document.querySelector('.burger')
// const open = document.querySelector('.nav-block')

// burger.addEventListener('click', () => {
//     open.classList.add ('.open')
//     // this.classList.toggle('active');
//     // document.querySelector('nav-block').classList.toggle('open')
// } )



export default Header;
