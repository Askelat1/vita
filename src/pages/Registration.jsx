import {useForm} from "react-hook-form";
import module from './Registration.css'

import logo from '../assets/logo.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import inst from '../assets/inst.png'
import apple from '../assets/apple.png'

function Registration (props) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)

    return (
        <div className='block'>
            <div className="block__text">Регистрация</div>
            <form className={module.form} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input">
                    <label className="input_tittle" htmlFor="firstName">ФИО</label>
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
                    {errors.firstName && <span className="error" role="alert">{errors.firstName?.message}</span>}
                </div>
                <div className="form-input">
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
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div>
                <div className="form-input">
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
                <div className="form-input">
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
                <div className="form-input">
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
                <div className="regist">
                    <label htmlFor="submit"></label>
                    <input className="regist-text" type="submit" name="submit" value="Зарегистрироваться"/>
                </div>
            </form>
            <div className="icon">
                <img className="icon_item" src={google}></img>
                <img className="icon_item" src={facebook}></img>
                <img className="icon_item" src={apple}></img>
            </div>
            <hr className="hr" />
            <div className="block2-text">У меня есть аккаунт</div>
            
            <div className="block2">
            <a className="block2-btn" href="/mainOffice"> Войти</a>
                {/* <button className="block2-btn">frgvr</button> */}
            </div>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </div>

        // <div className={module.block}>
        //     <div className={module.block__regist}>
        //         <div className={module.regist__text}>Регистрация</div>
        //         <form action="" className={module.form}>
        //             <input type="text"  placeholder="ФИО"/>
        //             <input type='email'  placeholder="Введите почту"/>
        //             <input type="text"  placeholder="0 XXX XXX XXX"/>
        //             <input type="text"  placeholder="Введите пароль"/>
        //             <input type="password"  placeholder="Подтвердить пароль"/>
        //         </form>
        //         <button className={module.get_text}>Зарегистрироваться</button>

        //     </div>
        //     <div className={module.block__logo}>
        //         <img className={module.logo} src={logo} alt="" />
        //         <div className={module.logo__text}>Уже есть аккаунт?</div>
        //         <div className={module.logo__icon}>
        //             <img className={module.icon__item} src={google} alt="" />
        //             <img className={module.icon__item} src={facebook} alt="" />
        //             <img className={module.icon__item} src={inst} alt="" />
        //         </div>
        //         <button className={module.get__logo}><a href="/mainOffice">Войти</a></button>

        //     </div>
        // </div>
    )
}

export default Registration;