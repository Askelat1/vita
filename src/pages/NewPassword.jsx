import {useForm} from "react-hook-form";
import React from 'react';
import module from './NewPassword.css'
import logo from '../assets/logo.png'




function NewPassword (props) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = async data => {
        console.log(data)
    }
    return (

        <div className="login_block">
            <img className="newPass_logo" src={logo}></img>
            <div className="newPass_text">Создайте новый пароль</div>
            <form className={module.form} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
                    <input className="newPass_input"
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
                <div className="form-input" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="password" 
                        name="cpassword" 
                        placeholder="Повторите пароль"
                        {...register("cpassword", {
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Ваши пароли не совпадают";
                                }
                            },
                            required: 'Параметр обязателен'
                        })}
                    />
                    {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
                </div>
                <div className="regist">
                    <label htmlFor="submit"></label>
                    <input className="regist-text" type="submit" name="submit" value="Зарегистрироваться"/>
                </div>
            </form>
            
        </div>
    )
}

export default NewPassword;