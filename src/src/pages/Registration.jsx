import {useForm} from "react-hook-form";
import module from './Registration.module.css'
import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import { auth } from '../app/firebase'

import logo from '../assets/logo.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import inst from '../assets/inst.png'
import apple from '../assets/apple.png'

function Registration (props) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            sendEmailVerification(userCredential.user)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(errors)

    return (
        <div className={module.block}>
            <div className={module.block__text}>Регистрация</div>
            <form className={module.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={module.form_input}>
                    <label className={module.nput_tittle} htmlFor="firstName">ФИО</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="ФИО" 
                        {...register('firstName', {
                            required: "Параметр обязателен", 
                            maxLength: {
                                value: 20,
                                message: 'Ваше имя должно быть меньше 20 символов'
                            }, 
                            minLength: {
                                value: 3,
                                message: 'Ваше имя должно быть больше 3 символов'
                            } 
                        })}
                    />
                    {errors.firstName && <span className={module.error} role="alert">{errors.firstName?.message}</span>}
                </div>
                <div className={module.form_input}>
                    <label htmlFor="email">E-mail: </label>
                    <input 
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
                    {errors.email && <span className={module.error} role="alert">{errors.email?.message}</span>}
                </div>
                <div className={module.form_input}>
                    <label htmlFor="login">Номер телефона </label>
                    <input 
                        type="number" 
                        name="phone" 
                        placeholder="0 XXX XXX XXX"
                        {...register("phone", {
                            required: "Параметр обязателен",
                            pattern: {
                                value: [Number],
                                message: "только номер телефона"
                            },
                            maxLength: 20, 
                            minLength: 3
                        })}
                    />
                    {errors.login && <span className="error" role="alert">{errors.login?.message}</span>}
                </div>
                <div className={module.form_input}>
                    <label htmlFor="password">Пароль: </label>
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
                    {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                <div className={module.form_input}>
                    <label htmlFor="cpassword">Повторите пароль: </label>
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
                <div className={module.regist}>
                    <label htmlFor="submit"></label>
                    <input className={module.regist_text} type="submit" name="submit" value="Зарегистрироваться"/>
                    <hr className={module.hr} />
                </div>
            </form>
            {/* <div className={module.icon}>
                <img className={module.icon_item} src={google}></img>
                <img className={module.icon_item} src={facebook}></img>
                <img className={module.icon_item} src={apple}></img>
            </div> */}
            <div className={module.block2_text}>У меня есть аккаунт</div>
            
            <div className={module.block2}>
            <a className={module.block2_btn} href="/mainOffice"> Войти</a>
                {/* <button className="block2-btn">frgvr</button> */}
            </div>
        </div>

    )
}

export default Registration;