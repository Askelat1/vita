import React, { useState } from "react";
import {useForm} from "react-hook-form";
import module from './MainOffice.module.scss'
import logo from '../assets/logo.png'
import google from '../assets/google.png'
import face from '../assets/facebook.png'
import inst from '../assets/inst.png'
import app from '../assets/apple.png'
function MainOffice(props) {

      const {register, handleSubmit, watch, formState: { errors } } = useForm();

      const onSubmit = async data => {
            console.log(data)
      }

      console.log(errors)
      return (
            <div className={module.logo}>
                  <img className={module.vita} src={logo} />
                  <div className={module.enter}>
                        <h1>
                              Вход в личный кабинет
                        </h1>
                  </div>
                  <div className={module.email}>
                        <form className={module.email_1} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-input">
                        <label htmlFor="email"></label>
                        <input className={module.почта}
                        type="text" 
                        name="email" 
                        placeholder="Введите e-mail"
                        {...register("email", {
                              required: "Параметр обязателен",
                        pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Ваш email не подходит под нужный формат"
                        }
                        })}
                  />
                  {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
            </div>

            <div className="form-input" >
                  <label htmlFor="password"></label>
                  <input className={module.psw}
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                              required: "Параметр обязателен",
                              minLength: {
                                    value: 5,
                                    message: "Минимальная длина пароля 5 символов"
                              }
                        })}
                        />
                        {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
            </div>
                  
                              {/* <input type="email" placeholder="Введите почту" className={module.почта} required></input>
                              <input type="password" placeholder="Enter Password" className={module.psw} required></input> */}
                              <div className="regist">
                        <label htmlFor="submit"></label>
                        <input className={module.click} type="submit" name="submit" value="Войти"/>
                  </div>
                              <a href="/newPass" className={module.parol}>забыли пароль?</a>
                              
                        </form>
                        <div>
                              <button className={module.google_b1}><img  src={google} alt="" className={module.classes} />Войти с помощью Google</button>
                              <button className={module.google_b}><img  src={face} alt="" className={module.classes} />Войти с помощью Google</button>
                              <button className={module.google_b}><img  src={app} alt="" className={module.classes} />Войти с помощью Google</button>

                        </div>
                  </div>
                  
                  <h2>Еще нет аккаунта?</h2>
                  <button className={module.reg}>Зарегистрироваться</button>
            </div>
      )
}

export default MainOffice;