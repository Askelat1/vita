import {useForm} from "react-hook-form";
import React from 'react';
import module from './NewPassword.module.css'
import logo from '../assets/logo.png'




function NewPassword (props) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = async data => {
        console.log(data)
    }
    return (

        <div className={module.login_block}>
            <img className={module.newPass_logo} src={logo}></img>
            <div className={module.newPass_text}>Создайте новый пароль</div>
            <div className={module.newPass_input}>
                    <input 
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
                    {errors.password && <span className={module.error} role="alert">{errors.password?.message}</span>}
                </div>
                <div className={module.form_input}>
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
                    {errors.cpassword && <span className={module.error} role="alert">{errors.cpassword?.message}</span>}
                </div>
                <div className={module.regist}>
                    <label htmlFor="submit"></label>
                    <input className={module.regist_text} type="submit" name={module.submit} value="Зарегистрироваться"/>
                </div>
        </div>
    )
}

export default NewPassword;